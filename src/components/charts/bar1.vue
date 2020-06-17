<style lang="less" scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
import echarts from "echarts";
import tdTheme from "./theme.json";
import { on, off } from "@/libs/tools";
echarts.registerTheme("tdTheme", tdTheme);
export default {
  name: "ChartBar",
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
      console.log(this.data);
      this.drawEcharts();
    },
    drawEcharts() {
      let option = {
        color: ["#003366", "#006699", "#4cabce", "#e5323e"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["Forest", "Steppe", "Desert", "Wetland"]
        },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            splitLine: { show: false },
            axisLine: {
              show: false //不显示坐标轴线
            },
            data: ["2012", "2013", "2014", "2015", "2016"]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              show: false //不显示坐标轴线
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#65C5E7"],
                width: 1,
                opacity: 0.2
              }
            }
          }
        ],
        series: [
          {
            name: "Forest",
            type: "bar",
            barGap: 0,
            barWidth: 10,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00D2FF" //柱图渐变色起点颜色
                  },
                  {
                    offset: 1,
                    color: "#00EF8D" //柱图渐变色终点颜色
                  }
                ])
              }
            },
            data: [320, 332, 301, 334, 390]
          },
          {
            name: "Steppe",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#EBBA4B" //柱图渐变色起点颜色
                  },
                  {
                    offset: 1,
                    color: "#EFB369" //柱图渐变色终点颜色
                  }
                ])
              }
            },
            data: [220, 182, 191, 234, 290]
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
