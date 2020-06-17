<style lang="less" scoped>
@import "../../index.less";
.area_map {
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
    .area_comprehensive_title_p1 {
      flex: 1;
      font-size: @wnkj_font_16;
      padding: 10px 0;
      color: @wnkj_color_fff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .area_comprehensive_title_p2 {
      font-size: @wnkj_font_24;
      padding-bottom: 30px;
      padding-right: 0;
    }
    .area_comprehensive_title_p3 {
    }
  }
  .area_map_content {
    display: flex;
    justify-content: space-around;
    .area_map_center {
      flex: 1;
      margin: 0 30px;
    }
    .area_map_left {
      width: 400px;
    }
    .area_map_right {
      width: 600px;
    }
  }
  .area_map_title {
    p {
      text-align: center;
      color: @wnkj_color_2d8cf0;
    }
    .area_map_title_p1 {
      padding-top: 0;
      font-size: 24px;
    }
    .area_map_title_p2 {
      font-size: 18px;
      padding: 10px 0;
    }
  }
  .area_map_left_echarts {
    .area_map_left_echarts_pie {
      display: flex;
    }
  }
  .area_map_left_echarts_title {
      background: url(../../assets/images/qszhqk.png) no-repeat;
      background-size: auto 100%;
      color: #fff;
      font-size: 16px;
      padding: 15px 30px;
      margin-bottom: 15px;
    }
}
</style>
<template>
  <div class="area_map">
    <div class="area_comprehensive_title">
      <div class="area_comprehensive_title_p1">
        <img :src="logo" />
        湖南省智慧医疗废物监管云平台
      </div>
      <div class="area_comprehensive_title_p1 area_comprehensive_title_p2">地市医疗废物转运交接实时状态监控</div>
      <div
        class="area_comprehensive_title_p1 area_comprehensive_title_p3"
      >数据更新时间：2020-05-30 12:35:58</div>
    </div>
    <div class="area_map_content">
      <div class="area_map_left">
        <div class="area_map_left_echarts">
          <div class="area_map_left_echarts_title">区域基础情况</div>
          <div class="area_map_left_echarts_pie">
            <chart-pie2
              :data="cityBaseOrgInfobaseOrgInfo[0]"
              :color="['#2783CD', '#0EFCFF']"
              style="height: 150px; width:50%;"
            />
            <chart-pie2
              :data="cityBaseOrgInfobaseOrgInfo[1]"
              :color="['#D88330', '#FFF267']"
              style="height: 150px; width:50%;"
            />
          </div>
        </div>
        <status-table
          style="margin-top: 15px;"
          :orderNo="orderNo"
          :regionCode="formItem.regionCodeIndex"
          :tableHeader="['地区', '当日', '本月累计', '年累计']"
          tableTitle="各地市医废收集量实时情况（KG）"
          :data="cityRecyRegionAcuu"
        ></status-table>
      </div>
      <div class="area_map_center">
        <chart-province :formItem="formItem" :cityRegionTrans="cityRegionTrans" style="height: 550px; width:100%;" text="用户访问来源"></chart-province>
        <status-table style="margin-top: 15px;" :tableHeader="['', '感染性', '损伤性', '病理性', '化学性', '药物性', '合计']" :tableTitle="cityRegionPocTypeTitle" :data="cityRegionPocType"></status-table>
      </div>
      <div class="area_map_right">
        <status-table :tableTitle="tableTitle1" :data="tableData1"></status-table>
        <div class="area_map_left_echarts_title">医疗废物实时处置状态</div>
        <div style="width:100%;height:250px;">
          <chart-bar1></chart-bar1>
        </div>
        <status-table style="margin-top: 15px;" :tableHeader="['预警时间', '预警机构名称', '预警内容']" :tableTitle="cityMwasteOpertionTitle" :data="cityMwasteOpertion"></status-table>
      </div>
    </div>
  </div>
</template>
<script>
import { ChartProvince, ChartPie2, ChartBar, ChartBar1 } from "_c/charts";
import { BasicTable, StatusTable } from "_c/table";
import logo from "@/assets/images/logo.png";
import provice from "@/libs/provice";
import moment from 'moment';
import { mapActions } from "vuex";
export default {
  name: "area_map",
  components: {
    ChartProvince,
    ChartBar,
    ChartPie2,
    ChartBar1,
    StatusTable,
    BasicTable
  },
  data() {
    return {
      logo,
      orderNo: true,
      tableTitle1: "医废运输状态",
      cityRegionPocTypeTitle: "",
      cityMwasteOpertionTitle: "",
      formItem: {
      },
      cityBaseOrgInfobaseOrgInfo: [],
      cityRecyRegionAcuu: [],
      cityRegionTrans: {},
      cityRegionPocType: [],
      cityRegionVehData: [],
      cityMwasteOpertion: [],
      timer: null,
      index: 0
    };
  },
  created() {
    this.getAllData();
    let timer = setInterval(() => {
      if (this.index <= provice.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
      this.getAllData();
    }, 5000);
  },
  methods: {
    ...mapActions([
      "handleCityMwasteOpertion",
      "handleCityRegionVehData",
      "handleCityRegionDispData",
      "handleCityRegionPocType",
      "handleCityRegionTrans",
      "handleCityRecyRegionAcuu",
      "handleCityBaseOrgInfobaseOrgInfo"
    ]),
    getAllData(){
      this.formItem.regionCode = provice[this.index].regionCode;
      this.formItem.date = moment(new Date()).format("YYYY-MM-DD");
      this.formItem.regionCodeIndex = this.index;
      this.getCityBaseOrgInfo();
      this.getRecyRegionAcuu();
      this.getCityRegionTrans();
      this.getRegionPocType();
      this.getRegionVehData();
      this.getRegionDispData();
      this.getMwasteOpertion();
    },
    getMwasteOpertion() {
      this.handleCityMwasteOpertion(this.formItem).then(res => {
        this.cityMwasteOpertion = res.data;
        this.cityMwasteOpertionTitle = `医疗机构医疗废物异常预警-${provice[this.index].name}`
      });
    },
    getRegionDispData() {
      this.handleCityRegionDispData(this.formItem).then(res => {
        this.cityRegionDispData = res.data.map(item=>{
          return {
          }
        });
      });
    },
    getRegionVehData() {
      this.handleCityRegionVehData(this.formItem).then(res => {
        this.cityRegionVehData = res.data.map(item=>{
          return {
          }
        });
      });
    },
    getRegionPocType() {
      this.handleCityRegionPocType(this.formItem).then(res => {
        this.cityRegionPocType = res.data.map(item=>{
          return {
            statItem: item.statItem,
            type001: item.type001,
            type002: item.type002,
            type003: item.type003,
            type004: item.type004,
            type005: item.type005,
            total: item.total
          }
        });
        this.cityRegionPocTypeTitle = `不同类型医疗废物不同环节实时监控数据-${provice[this.index].name}`
      });
    },
    getCityRegionTrans() {
      this.handleCityRegionTrans(this.formItem).then(res => {
        this.cityRegionTrans = {
          name: provice[this.index].name,
          value: res.data
        }
      });
    },
    getCityBaseOrgInfo() {
      this.handleCityBaseOrgInfobaseOrgInfo(this.formItem).then(res => {
        this.cityBaseOrgInfobaseOrgInfo = res.data;
      });
    },
    getRecyRegionAcuu() {
      this.handleCityRecyRegionAcuu({
        date: moment(new Date()).format("YYYY-MM-DD"),
        regionCode: "430000"
      }).then(res => {
        this.cityRecyRegionAcuu = res.data.map((item, index) => {
          if (this.formItem.regionCodeSelf == item.regionCode) {
            this.formItem.regionCodeIndex = index;
          }
          return {
            regionName: item.regionName,
            dateWeight: item.dateWeight,
            monthWeight: item.monthWeight,
            yearWeight: item.yearWeight
          };
        });
      });
    }
  }
};
</script>
