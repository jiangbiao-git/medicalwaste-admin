<style lang="less">
.charts {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div ref="dom" class="charts chart-pie"></div>
</template>

<script>
import echarts from "echarts";
import tdTheme from "./theme.json";
import { on, off } from "@/libs/tools";
echarts.registerTheme("tdTheme", tdTheme);
export default {
  name: "ChartPie",
  props: {
    data: Object,
    color: Array
  },
  data() {
    return {
      dom: null
    };
  },
  methods: {
    resize() {
      this.dom.resize();
    },
    drawEchart() {
      if(this.data === undefined) return;
      let current = this.data.uploadNum; // 当前用量
      let all = this.data.orgTotalNum; // 总量
      let option = {
        title: {
          text: `${(this.data.rate * 100).toFixed(2)}%`,
          textStyle: {
            color: "#0DD0DD",
            fontSize: 20
          },
          subtext: this.data.regionName,
          subtextStyle: {
            color: "#5092C1"
          },
          itemGap: 15, // 主副标题距离
          left: "center",
          top: 70
        },
        series: [
          {
            type: "pie",
            label: {
              show: false
            },
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            center: ["50%", "70%"],
            radius: ["70%", "100%"],
            startAngle: 180,
            data: [
              {
                name: "用量",
                value: current,
                label: {
                  show: true,
                  formatter: '{c}',
                  position: "inside"
                },
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                      offset: 0,
                      color: this.color[0]
                    },
                    {
                      offset: 1,
                      color: this.color[1]
                    }
                  ])
                }
              },
              {
                name: "rest",
                value: all - current,
                label: {
                  show: true,
                  formatter: '{c}',
                  position: "inside"
                },
                itemStyle: {
                  color: "#082358"
                }
              },
              {
                name: "bottom",
                value: all,
                itemStyle: {
                  color: "transparent"
                }
              }
            ]
          }
        ]
      };
      this.dom.setOption(option, true);
      on(window, "resize", this.resize);
    }
  },
  watch: {
    data: function(){
      this.drawEchart();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.dom = echarts.init(this.$refs.dom, "tdTheme");
      this.drawEchart();
    });
  },
  beforeDestroy() {
    off(window, "resize", this.resize);
  }
};
</script>
