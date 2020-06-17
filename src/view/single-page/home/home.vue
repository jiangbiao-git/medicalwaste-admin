<style lang="less" scoped>
@import "../../../index.less";
.area_comprehensive {
  background: url(../../../assets/images/bg.png);
  .area_comprehensive_content {
    display: flex;
    justify-content: space-around;
    .area_comprehensive_left {
      width: 450px;
      margin-right: 15px;
    }
    .area_comprehensive_right {
      flex: 1;
      .area_comprehensive_right_foooter {
        display: flex;
      }
      .area_comprehensive_right_bar {
        position: relative;
        .area_comprehensive_right_bar_conetnt {
          display: flex;
          align-items: center;
          padding: 15px 0;
          justify-content: space-between;
          .area_comprehensive_bar_title {
            flex: 1;
            font-weight: bold;
            background: @wnkj_color_2d8cf0;
            color: @wnkj_color_fff;
            padding: 10px 15px;
            box-sizing: border-box;
            margin-right: 1px;
          }
          .area_comprehensive_bar_tab {
            display: flex;
            width: 420px;
            .area_comprehensive_bar_btn {
              flex: 1;
              padding: 10px 15px;
              color: @wnkj_color_333;
              box-sizing: border-box;
              text-align: center;
            }
            .area_comprehensive_bar_btn_active {
              background: @wnkj_color_2d8cf0;
              color: @wnkj_color_fff;
            }
          }
        }
      }
    }
  }
  .area_comprehensive_title {
    p {
      text-align: center;
      color: @wnkj_color_2d8cf0;
    }
    .area_comprehensive_title_p1 {
      padding-top: 0;
      font-size: 24px;
    }
    .area_comprehensive_title_p2 {
      font-size: 18px;
      padding: 10px 0;
    }
  }
  .area_comprehensive_line {
    width: 100%;
    height: 400px;
    .spin-icon-load {
      animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
      from {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  .area_comprehensive_pie {
    position: relative;
    border: 1px solid @wnkj_color_eee;
    margin-top: 15px;
    .area_comprehensive_pie_tab {
      display: flex;
      width: 200px;
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 99;
      .area_comprehensive_pie_btn {
        flex: 1;
        padding: 10px 15px;
        color: @wnkj_color_333;
        text-align: center;
      }
      .area_comprehensive_pie_btn_active {
        background: @wnkj_color_2d8cf0;
        color: @wnkj_color_fff;
      }
    }
  }
}
</style>
<template>
  <div class="area_comprehensive">
    <div class="area_comprehensive_content">
      <div class="area_comprehensive_left">
        <div class="area_comprehensive_title">
          <p
            class="area_comprehensive_title_p2"
            style="padding-top:0;text-align: left;"
          >湖南省智慧医疗废物监管云平台</p>
        </div>
        <basic-table :tableTitle="tableTitle4" :tableData="tableData4"></basic-table>
        <basic-table style="margin-top: 15px;" :tableTitle="tableTitle6" :tableData="tableData6"></basic-table>
        <div class="area_comprehensive_pie">
          <div class="area_comprehensive_pie_tab">
            <div
              :class="{'area_comprehensive_pie_btn_active': pieIndex === 0}"
              class="area_comprehensive_pie_btn"
            >当天</div>
            <div
              :class="{'area_comprehensive_pie_btn_active': pieIndex === 1}"
              class="area_comprehensive_pie_btn"
            >本月</div>
            <div
              :class="{'area_comprehensive_pie_btn_active': pieIndex === 2}"
              class="area_comprehensive_pie_btn"
            >本年</div>
          </div>
          <chart-pie style="width: 100%;height: 400px;"></chart-pie>
        </div>
      </div>
      <div class="area_comprehensive_right">
        <div class="area_comprehensive_title">
          <p class="area_comprehensive_title_p2" style="padding-top:0;text-align: right;">鹰眼质控</p>
        </div>
        <basic-table :tableTitle="tableTitle1" :tableData="tableData1"></basic-table>
        <div class="area_comprehensive_right_bar">
          <div class="area_comprehensive_right_bar_conetnt">
            <div class="area_comprehensive_bar_title">30天不同类型医疗废物趋势</div>
            <div class="area_comprehensive_bar_tab">
              <div
                :class="{'area_comprehensive_bar_btn_active': barIndex === 0}"
                class="area_comprehensive_bar_btn"
              >临床收集量</div>
              <div
                :class="{'area_comprehensive_bar_btn_active': barIndex === 1}"
                class="area_comprehensive_bar_btn"
              >入缓存间量</div>
              <div
                :class="{'area_comprehensive_bar_btn_active': barIndex === 2}"
                class="area_comprehensive_bar_btn"
              >出缓存间量</div>
              <div
                :class="{'area_comprehensive_bar_btn_active': barIndex === 3}"
                class="area_comprehensive_bar_btn"
              >处置点接收量</div>
            </div>
          </div>
          <div class="area_comprehensive_line">
            <Spin v-if="!typeDays" fix>
              <Icon type="ios-loading" size="18" class="spin-icon-load"></Icon>
              <div>Loading</div>
            </Spin>
            <chart-line v-if="typeDays" :data="typeDays"></chart-line>
          </div>
        </div>
        <div class="area_comprehensive_right_foooter">
          <status-table
            style="margin-top: 15px;margin-right: 15px;flex:1;"
            :tableTitle="tableTitle2"
            :tableData="tableData2"
          ></status-table>
          <status-table
            style="margin-top: 15px;flex:1;"
            :tableTitle="tableTitle3"
            :tableData="tableData3"
          ></status-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ChartPie, ChartLine } from "_c/charts";
import { BasicTable, StatusTable } from "_c/table";
import { mapActions } from "vuex";
// import bg from '@/assets/images/bg.png'
// import qszhqk from '@/assets/images/qszhqk.png'
import _ from "lodash";
export default {
  name: "area_comprehensive",
  components: {
    ChartPie,
    ChartLine,
    StatusTable,
    BasicTable
  },
  data() {
    return {
      barIndex: 0,
      pieIndex: 0,
      normalTimer: null,
      timer: null,
      tableTitle1: "全省综合情况",
      tableData1: [
        {
          name: "医废总量",
          collect: "当天(KG)",
          way: "昨天(KG)",
          tell: "日增长率(%)",
          tell1: "本月(KG)",
          tell2: "上月(KG)",
          tell3: "月增长率(%)",
          tell4: "今年(KG)",
          tell5: "去年(KG)",
          tell6: "年增长率(%)",
          tell7: "累计(KG)"
        },
        {
          name: "入缓存间",
          collect: "8.75",
          way: "0.75",
          tell: "3.75",
          tell1: "3.75",
          tell2: "3.75",
          tell3: "3.75",
          tell4: "3.75",
          tell5: "3.75",
          tell6: "3.75",
          tell7: "3.75"
        }
      ],
      tableTitle2: "医疗废物实时处置状态",
      tableData2: [
        {
          name: "处置点名称",
          collect: "接收量(KG)",
          way: "处置量(KG)",
          tell: "库存量(KG)"
        },
        {
          name: "长沙市危险废物处置中心",
          collect: "44.28",
          way: "0.75",
          tell: "3.75"
        }
      ],
      tableTitle3: "医疗机构医疗废物异常预警-长沙市",
      tableData3: [
        {
          name: "预警时间",
          collect: "预警机构名称",
          way: "预警内容"
        },
        {
          name: "2020-05-1214:09:09",
          collect: "南雅医院",
          way: "未出医废(连续3天未出医废)"
        }
      ],
      tableTitle4: "全省各等级医疗机构实时上报情况概览",
      tableData4: [
        {
          title: "机构类型",
          name: "医疗机构总数",
          collect: "实时上报机构数",
          way: "实时上报占比(%)",
          way1: "当天上报量(KG)"
        },
        {
          title: "三级医疗机构",
          name: "220",
          collect: "80",
          way: "36.3%",
          way1: "5,988.5KG"
        }
      ],
      tableTitle5: "各地市医废收集量实时情况（KG）",
      tableData5: [
        {
          name: "地区",
          collect: "当日",
          way: "本月累计",
          way1: "年累计"
        },
        {
          title: "长沙市",
          name: "75.58",
          collect: "190.17",
          way3: "27210.18"
        }
      ],
      tableTitle6: "全省不同分类医疗废物实时收集情况",
      tableData6: [
        {
          title: "",
          name: "当天",
          collect: "月累计",
          way: "环比%",
          way1: "占比%"
        },
        {
          title: "感染性废物",
          name: "220",
          collect: "80",
          way: "36.3%",
          way1: "41.73"
        }
      ],
      formItem: {
        date: "2020-06-07",
        regionCode: "430000"
      },
      baseOrgInfo: null,
      regionGr: null,
      recyDataAcuu: null,
      typeDays: null,
      mwasteWarn: null,
      mwasteOpertion: null
    };
  },
  created() {
    this.getBaseOrgInfo();
    this.getRegionGr();
    this.getTypeDays();
    this.getRecyDataAcuu();
    this.getMwasteWarn();
    this.getMwasteOpertion();
  },
  methods: {
    ...mapActions([
      "handleBaseOrgInfo",
      "handleRegionGr",
      "handleTypeDays",
      "handleRecyDataAcuu",
      "handleMwasteWarn",
      "handleMwasteOpertion"
    ]),
    getBaseOrgInfo() {
      //查询全国各等级医疗机构实时上报情况概览
      this.handleBaseOrgInfo(this.formItem).then(res => {
        this.baseOrgInfo = res.data;
      });
    },
    getRegionGr() {
      //查询全省综合情况列表
      this.handleRegionGr(this.formItem).then(res => {
        this.regionGr = res.data;
      });
    },
    getTypeDays() {
      //查询全省综合情况图表
      this.handleTypeDays(this.formItem).then(res => {
        this.typeDays = _(res.data)
          .groupBy(item => item.typeName)
          .map((items, name) => {
            return {
              name: name,
              data: items
            };
          })
          .value();
      });
    },
    getRecyDataAcuu() {
      //查询全省不同分类医疗废物实时收集情况
      this.handleRecyDataAcuu(this.formItem).then(res => {
        this.recyDataAcuu = res.data;
      });
    },
    getMwasteWarn() {
      //查询医疗机构废物异常报警
      this.handleMwasteWarn(this.formItem).then(res => {
        this.mwasteWarn = res.data;
      });
    },
    getMwasteOpertion() {
      //查询医疗机构废物动态操作信息
      this.handleMwasteOpertion(this.formItem).then(res => {
        this.mwasteOpertion = res.data;
      });
    },
    pieTimer() {
      this.timer = setInterval(() => {
        if (this.pieIndex < 2) {
          this.pieIndex++;
        } else {
          this.pieIndex = 0;
        }
      }, 5000);
    },
    barTimer() {
      this.normalTimer = setInterval(() => {
        if (this.barIndex < 2) {
          this.barIndex++;
        } else {
          this.barIndex = 0;
        }
      }, 5000);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.normalTimer);
  }
};
</script>
