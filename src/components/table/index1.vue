<style lang="less" scoped>
@import "../../index.less";
table tr:first-child {
  font-weight: bold;
}
table {
  min-width: 300px;
  width: 100%;
  border-collapse: collapse;
}
.table {
  .title {
    background: url(../../assets/images/qszhqk.png) no-repeat;
    background-size: auto 100%;
    color: @wnkj_color_fff;
    font-size: @wnkj_font_16;
    padding: @wnkj_padding_15 @wnkj_padding_30;
    margin-bottom: 15px;
  }
  .wnkj_nodata {
    padding: 30px;
    box-sizing: border-box;
    text-align: center;
    color: @wnkj_color_fff;
  }
}
</style>
<style scoped>
.table >>> table tr td,
.table >>> table tr th {
  padding: 7px 10px;
  text-align: center;
  color: #9ca8be;
}
.table >>> table tr:nth-child(2n + 1) {
  background: rgba(2, 24, 72, 1);
}
.table >>> .wnkj_regionCode {
  background: linear-gradient(
    0deg,
    rgba(32, 118, 184, 1) 0%,
    rgba(14, 208, 222, 1) 100%
  ) !important;
  font-style: italic;
  font-weight: bold;
}
.table >>> .wnkj_regionCode td {
  color: #fff;
}
</style>
<template>
  <div class="table">
    <p class="title">{{tableTitle}}</p>
    <table>
      <tr>
        <th v-for="(d,index) in tableHeader" :key="index">{{d}}</th>
      </tr>
      <template v-if="data && data.length>0">
        <tr
          :class="{'wnkj_regionCode': regionCode === index && regionCode != -1}"
          v-for="(d,index) in data"
          :key="index"
          v-html="formatTbale(d, regionCode)"
        ></tr>
      </template>
    </table>
    <div class="wnkj_nodata" v-if="!data || data.length===0">暂无数据</div>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  props: {
    regionCode: {
      type: Number,
      default: -1
    },
    orderNo: {
      type: Boolean,
      default: false
    },
    tableTitle: {
      type: String,
      default: ""
    },
    tableHeader: {
      type: Array,
      default: () => {
        return [];
      }
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    formatTbale(d, regionCode) {
      let arr = "";
      _.forIn(d, function(value, key) {
        arr += `<td>${value ? value : "无"}</td>`;
      });
      return arr;
    }
  }
};
</script>