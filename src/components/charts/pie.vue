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
    data: Array
  },
  data() {
    return {
      dom: null
    };
  },
  methods: {
    resize() {
      this.dom.resize();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.dom = echarts.init(this.$refs.dom, "tdTheme");
      this.drawEcharts();
    });
  },
  methods: {
    setReset() {
      this.drawEcharts();
    },
    drawEcharts() {
      let data = [];
      let totalNum = this.data[0].totalWeight;
      this.data.forEach(item => {
        data.push({
          name: item.typeName,
          value: (item.weight / totalNum).toFixed(2) * 100
        });
      });
      let option = {
        title: {
          text: "100%",
          textStyle: {
            color: "#2BF9FF",
            fontSize: 25
          },
          subtext: "合计",
          subtextStyle: {
            color: "#2BF9FF"
          },
          itemGap: -3, // 主副标题距离
          left: "center",
          top: "center"
        },
        color: ["#298FFF", "#1763FD", "#6D41F7", "#42CBB6", "#E7913D"],
        series: [
          {
            type: "pie",
            radius: ["60%", "80%"],
            data: data,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            }
          }
        ]
      };
      this.dom.setOption(option, true);
      on(window, "resize", this.resize);
    }
  },
  beforeDestroy() {
    off(window, "resize", this.resize);
  }
};
</script>
