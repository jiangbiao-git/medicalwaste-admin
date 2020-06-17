<template>
  <div ref="dom" class="charts chart-province"></div>
</template>

<script>
import echarts from "echarts";
import { mapActions } from "vuex";
import tdTheme from "./theme.json";
import hunan from "./hunan.json";
import { on, off } from "@/libs/tools";
echarts.registerTheme("tdTheme", tdTheme);
import axios from "axios";
import logo from "@/assets/images/logo.png";
export default {
  name: "ChartProvince",
  props: {
    formItem: Object,
    cityRegionTrans: Object,
  },
  data() {
    return {
      dom: null,
      logo,
    };
  },
  methods: {
    resize() {
      this.dom.resize();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawEchart(this.cityRegionTrans);
    });
  },
  watch: {
    cityRegionTrans: function(){
      this.drawEchart(this.cityRegionTrans);
    }
  },
  methods: {
    drawEchart(cityRegionTrans) {
      echarts.registerMap("hunan", hunan);
      let option = {
        tooltip: {
          trigger: "item",
          position: "bottom",
          borderColor: "#0DD0DD",
          borderWidth: 1,
          padding: [15, 30],
          backgroundColor: "#000",
          formatter: function(params, ticket, callback) {
            return `
                <p style="text-align:center;">${params.name}</p>
                <p style="text-align:center;">${cityRegionTrans.value[0].statItem}：${cityRegionTrans.value[0].statValue}</p>
                <p style="text-align:center;">${cityRegionTrans.value[1].statItem}：${cityRegionTrans.value[1].statValue}</p>
                <p style="text-align:center;">${cityRegionTrans.value[2].statItem}：${cityRegionTrans.value[2].statValue}</p>
                <p style="text-align:center;">${cityRegionTrans.value[3].statItem}：${cityRegionTrans.value[3].statValue}</p>
                <p style="text-align:center;">${cityRegionTrans.value[4].statItem}：${cityRegionTrans.value[4].statValue}</p>
            `;
          }
        },
        series: [
          {
            name: "hunan",
            map: "hunan",
            type: "map",
            top: 10,
            left: 50,
            bottom: 10,
            right: 50,
            label: {
              normal: {
                formatter: function(val) {
                  return `{b|} ${val.name}`;
                },
                color: "#fff",
                rich: {
                  a: {
                    color: "red",
                    lineHeight: 10
                  },
                  b: {
                    backgroundColor: {
                      image: this.logo
                    },
                    width: 12,
                    height: 12,
                    borderRadius: 6
                  }
                }
              }
            },
            itemStyle: {
              normal: {
                label: { show: true },
                areaColor: "#082358",
                borderColor: "#1F79BA",
                borderWidth: 2
              },
              emphasis: {
                label: {
                  show: true,
                  color: "#FFF100",
                  rich: {
                    a: {
                      color: "red",
                      lineHeight: 10
                    },
                    b: {
                      backgroundColor: {
                        image: this.logo
                      },
                      width: 12,
                      height: 12,
                      borderRadius: 6
                    }
                  }
                },
                areaColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#1974B3"
                  },
                  {
                    offset: 1,
                    color: "#00CAFE"
                  }
                ])
              }
            },
          }
        ]
      };
      console.log(this.formItem.regionCodeIndex)
      this.dom = echarts.init(this.$refs.dom, "tdTheme");
      this.dom.setOption(option, true);
      this.dom.dispatchAction({
        type: "mapToggleSelect",
        // 可选，系列 index，可以是一个数组指定多个系列
        seriesIndex: 0,
        // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
        dataIndex: this.formItem.regionCodeIndex
      });
      this.dom.dispatchAction({
        type: "showTip", //默认显示江苏的提示框
        seriesIndex: 0, //这行不能省
        dataIndex: this.formItem.regionCodeIndex
      });
      on(window, "resize", this.resize);
    },
  },
  beforeDestroy() {
    off(window, "resize", this.resize);
    clearInterval(this.mTime);
  }
};
</script>
