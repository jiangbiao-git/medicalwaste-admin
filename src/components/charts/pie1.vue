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
    value: Array,
    text: String,
    subtext: String
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
      let option = {
        title: {
          text: "65.12%",
          textStyle: {
            color: "#2BF9FF",
            fontSize: 25
          },
          subtext: "合计",
          subtextStyle: {
            color: "#2BF9FF"
          },
          itemGap: -5, // 主副标题距离
          left: "center",
          top: "center"
        },
        angleAxis: {
          max: 100, // 满分
          clockwise: true, // 逆时针
          // 隐藏刻度线
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        radiusAxis: {
          type: "category",
          // 隐藏刻度线
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        polar: {
          center: ["50%", "50%"],
          radius: "140%" //图形大小
        },
        series: [
          {
            type: "bar",
            data: [
              {
                name: "作文得分",
                value: 75,
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                      {
                        offset: 0,
                        color: "#00EF8C"
                      },
                      {
                        offset: 1,
                        color: "#00D2FF"
                      }
                    ])
                  }
                }
              }
            ],
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 25,
            barGap: "-100%", // 两环重叠
            z: 2
          },
          {
            // 灰色环
            type: "bar",
            data: [
              {
                value: 100,
                itemStyle: {
                  color: "#e2e2e2",
                  shadowColor: "rgba(0, 0, 0, 0.2)",
                  shadowBlur: 5,
                  shadowOffsetY: 2,
                  normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                      {
                        offset: 0,
                        color: "#00FFFF"
                      },
                      {
                        offset: 1,
                        color: "#004970"
                      }
                    ])
                  }
                }
              }
            ],
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 25,
            barGap: "-100%", // 两环重叠
            z: 1
          }
        ]
      };
      this.dom = echarts.init(this.$refs.dom, "tdTheme");
      this.dom.setOption(option);
      on(window, "resize", this.resize);
    });
  },
  beforeDestroy() {
    off(window, "resize", this.resize);
  }
};
</script>
