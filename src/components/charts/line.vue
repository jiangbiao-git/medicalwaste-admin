<style lang="less">
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
import _ from "lodash";
import moment from "moment";
echarts.registerTheme("tdTheme", tdTheme);
export default {
  name: "ChartLine",
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
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
  created() {
    this.$nextTick(() => {
      let legend = _.map(this.data, "name");
      let xAxis = this.data[0].data.map(v => {
        return moment(v.theDate).format("YYYY/MM/DD");
      });
      let colors = ["#298FFF", "#1763FD", "#6D41F7", "#42CBB6", "#E7913D"];
      let series = this.data.map((item, index) => {
        let data = item.data.map(v => {
          return v.weight;
        });
        return {
          name: item.name,
          type: "line",
          color: colors[index],
          symbol: "none",
          smooth: true, //设置折线图平滑
          data
        };
      });
      let option = {
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: 50,
          right: 20,
          top: 50,
          bottom: 50
        },
        legend: {
          data: legend,
          icon: "rect",
          itemGap: 40,
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12
          }
        },
        xAxis: [
          {
            type: "category",
            splitLine: {
              show: false //不显示网格线
            },
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#65C5E7", // 颜色
                width: 1, // 粗细
                opacity: 0.2
              }
            },
            data: xAxis
          }
        ],
        yAxis: [
          {
            name: "重量kg",
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
        series: series
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
