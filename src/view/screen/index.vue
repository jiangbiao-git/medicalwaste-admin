<style lang="less" scoped>
@import "../../index.less";
.area_comprehensive {
  background: url(../../assets/images/bg.png) no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  padding: 15px;
  box-sizing: border-box;
  .area_comprehensive_title {
    background: url(../../assets/images/bg2.png) no-repeat;
    background-size: 100% auto;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .area_comprehensive_title_p {
      font-size: @wnkj_font_16;
      width: 450px;
      color: @wnkj_color_fff;
    }
    .area_comprehensive_title_p1{
      padding-left: 134px;
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .area_comprehensive_title_p2 {
      font-size: @wnkj_font_24;
      padding-bottom: 30px;
      padding-right: 0;
      padding-left: 0;
      flex: 1;
      text-align: center;
    }
    .area_comprehensive_title_p3 {
      padding-right: 176px;
      text-align: right;
    }
  }
  .area_comprehensive_content {
    display: flex;
    justify-content: space-around;
    .area_comprehensive_left {
      width: 500px;
      margin-right: 30px;
    }
    .area_comprehensive_right {
      flex: 1;
      .area_comprehensive_right_foooter {
        display: flex;
      }
      .area_comprehensive_right_bar {
        .area_comprehensive_line {
          position: relative;
        }
        .area_comprehensive_right_bar_conetnt {
          display: flex;
          align-items: center;
          padding: @wnkj_padding_15 0;
          justify-content: space-between;
          .area_comprehensive_bar_title {
            padding: @wnkj_padding_15 @wnkj_padding_30;
            font-size: @wnkj_font_16;
            background: url(../../assets/images/qszhqk.png) no-repeat;
            background-size: auto 100%;
            flex: 1;
            font-weight: bold;
            color: @wnkj_color_fff;
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
  .area_comprehensive_line {
    width: 100%;
    height: 250px;
    .spin-icon-load {
      animation: ani-demo-spin 1s linear infinite;
    }
    .ivu-spin-fix {
      background: none;
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
    margin-top: 15px;
    padding-top: 100px;
    .area_comprehensive_pie_tab {
      display: flex;
      width: 318px;
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 99;
      border: 1px solid @wnkj_color_2571E9;
      border-radius: 5px;
      .area_comprehensive_pie_btn:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      .area_comprehensive_pie_btn {
        flex: 1;
        padding: 10px 15px;
        color: @wnkj_color_2671E9;
        text-align: center;
      }
      .area_comprehensive_pie_btn_active {
        background: @wnkj_color_2571E9;
        color: @wnkj_color_fff;
      }
    }
  }
}
</style>
<template>
  <div class="area_comprehensive">
    <div class="area_comprehensive_title">
      <div class="area_comprehensive_title_p1 area_comprehensive_title_p">
        <img :src="logo" />
        湖南省智慧医疗废物监管云平台
      </div>
      <div class="area_comprehensive_title_p area_comprehensive_title_p2">地市医疗废物转运交接实时状态监控</div>
      <div
        class="area_comprehensive_title_p area_comprehensive_title_p3"
      >数据更新时间：2020-05-30 12:35:58</div>
    </div>
    <div class="area_comprehensive_content">
      <div class="area_comprehensive_left">
        <basic-table
          type="1"
          tableTitle="全省各等级医疗机构实时上报情况概览"
          :tableHeader="['机构类型', '医疗机构总数', '实时上报机构数', '实时上报占比(%)', '当天上报量(KG)']"
          :tableData="baseOrgInfo"
        ></basic-table>
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
            <div class="area_comprehensive_line">
              <Spin v-if="!recyDataAcuu" fix>
                <Icon type="ios-loading" size="18" class="spin-icon-load"></Icon>
                <div>Loading</div>
              </Spin>
               <div style="display: flex;">
              <chart-pie
                ref="pie"
                v-if="recyDataAcuu"
                :data="recyDataAcuu[pieIndex]"
                style="width: 200px;height: 200px;"
              ></chart-pie>
              <chart-bar
                ref="bar"
                v-if="recyDataAcuu"
                :data="recyDataAcuu[pieIndex]"
                style="flex:1;height: 200px;"
              ></chart-bar>
            </div>
          </div>
        </div>
      </div>
      <div class="area_comprehensive_right">
        <basic-table
          tableTitle="全省综合情况"
          :tableHeader="['医废总量', '当天(kg)', '昨天(kg)', '日增长率(%)', '本月(KG)', '上月(KG)', '月增长率(%)', '今年(KG)', '去年(KG)', '年增长率(%)', '累计(KG)']"
          :tableData="regionGr"
        ></basic-table>
        <div class="area_comprehensive_right_bar">
          <div class="area_comprehensive_right_bar_conetnt">
            <div class="area_comprehensive_bar_title">全省综合情况</div>
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
            tableTitle="医疗机构医疗废物异常预警"
            :tableHeader="['预警时间', '预警机构名称', '预警内容']"
            :tableData="mwasteWarn"
          ></status-table>
          <status-table
            style="margin-top: 15px;flex:1;"
            tableTitle="医疗废物动态操作信息"
            :tableData="mwasteOpertion"
          ></status-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ChartPie, ChartLine, ChartBar } from "_c/charts";
import { BasicTable, StatusTable } from "_c/table";
import { mapActions } from "vuex";
import moment from "moment";
import logo from "@/assets/images/logo.png";
// import qszhqk from '@/assets/images/qszhqk.png'
import _ from "lodash";
export default {
  name: "area_comprehensive",
  components: {
    ChartPie,
    ChartLine,
    ChartBar,
    StatusTable,
    BasicTable
  },
  data() {
    return {
      logo,
      barIndex: 0,
      pieIndex: 0,
      normalTimer: null,
      timer: null,
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
        this.baseOrgInfo = res.data.map(item => {
          return {
            rankName: item.rankName,
            orgTotalNum: item.orgTotalNum,
            uploadNum: item.uploadNum,
            uploadRate: item.uploadRate,
            uploadWeight: item.uploadWeight
          };
        });
      });
    },
    getRegionGr() {
      //查询全省综合情况列表
      this.handleRegionGr(this.formItem).then(res => {
        this.regionGr = res.data.map(item => {
          return {
            statItem: item.statItem,
            theDateWeight: item.theDateWeight,
            preDateWeight: item.preDateWeight,
            dateGr: item.dateGr,
            theMonthWeight: item.theMonthWeight,
            preMonthWeight: item.preMonthWeight,
            monthGr: item.monthGr,
            theYearWeight: item.theYearWeight,
            preYearWeight: item.preYearWeight,
            yearGr: item.yearGr,
            totalWeight: item.totalWeight
          };
        });
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
        this.pieTimer();
      });
    },
    getMwasteWarn() {
      //查询医疗机构废物异常报警
      this.handleMwasteWarn({
        date: "2020-06-11 15:05:00",
        regionCode: "430000"
      }).then(res => {
        this.mwasteWarn = res.data.map(item => {
          return {
            warnTime: moment(item.warnTime).format("YYYY-MM-DD hh:mm:ss"),
            orgName: item.orgName,
            remark: item.remark
          };
        });
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
          this.$refs.bar.setReset();
          this.$refs.pie.setReset();
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
