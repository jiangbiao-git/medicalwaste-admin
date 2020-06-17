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
      console.log(this.data)
      this.drawEcharts();
    },
    drawEcharts() {
      let data = [];
      let total = [];
      let xAxis = [];
      let totalNum = this.data[0].totalWeight;
      this.data.forEach(item => {
        data.push(item.weight);
        total.push(item.totalWeight);
        xAxis.push(item.typeName);
      });
      let option = {
        grid: {
          // 直角坐标系内绘图网格
          left: "0", //grid 组件离容器左侧的距离,
          top: "0",
          right: "0",
          bottom: "0",
          containLabel: true //gid区域是否包含坐标轴的刻度标签。为true的时候，
        },
        xAxis: {
          //直角坐标系grid中的x轴,
          //一般情况下单个grid组件最多只能放上下两个x轴,
          //多于两个x轴需要通过配置offset属性防止同个位置多个x轴的重叠。
          type: "value", //坐标轴类型,分别有：
          //'value'-数值轴；'category'-类目轴;
          //'time'-时间轴;'log'-对数轴
          splitLine: { show: false }, //坐标轴在 grid 区域中的分隔线
          axisLabel: { show: false }, //坐标轴刻度标签
          axisTick: { show: false }, //坐标轴刻度
          axisLine: { show: false } //坐标轴轴线
        },
        yAxis: {
          type: "category",
          axisTick: { show: false },
          axisLine: { show: false },
          splitLine: { show: false },
          axisLabel: {},
          data: xAxis
          //如果没有设置 type，但是设置了axis.data,则认为type 是 'category'。
        },
        series: [
          //系列列表。每个系列通过 type 决定自己的图表类型
          {
            name: "%", //系列名称
            type: "bar", //柱状、条形图
            barWidth: 12, //柱条的宽度,默认自适应
            data: data, //系列中数据内容数组
            label: {
              //图形上的文本标签
              show: true,
              position: "insideRight", //标签的位置
              distance: -40,
              formatter: function(params) {
                // do some thing
                return (params.data / totalNum).toFixed(2) * 100 + "%";
              },
              fontSize: 14, //标签字号
              color: "#fff"
            },
            itemStyle: {
              //图形样式
              normal: {
                //normal 图形在默认状态下的样式;
                //emphasis图形在高亮状态下的样式
                barBorderRadius: 10, //柱条圆角半径,单位px.
                //此处统一设置4个角的圆角大小;
                //也可以分开设置[10,10,10,10]顺时针左上、右上、右下、左下
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#2771E9" //柱图渐变色起点颜色
                  },
                  {
                    offset: 1,
                    color: "#01D1FF" //柱图渐变色终点颜色
                  }
                ])
              }
            },
            zlevel: 1 //柱状图所有图形的 zlevel 值,
            //zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
          },
          {
            name: "进度条背景",
            type: "bar",
            barGap: "-100%", //不同系列的柱间距离，为百分比。
            // 在同一坐标系上，此属性会被多个 'bar' 系列共享。
            // 此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，
            //并且是对此坐标系中所有 'bar' 系列生效。
            barWidth: 12,
            data: total,
            color: "#00adee", //柱条颜色
            itemStyle: {
              normal: {
                opacity: 0.2,
                barBorderRadius: 10
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
