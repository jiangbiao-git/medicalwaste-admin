<style lang="less" scoped>
@import "../../index.less";
table {
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
.table >>> table tr td:first-child {
  width: 140px;
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
        <tr v-for="(d,index) in tableData" :key="index" v-html="formatTbale(d)"></tr>
      </template>
    </table>
    <div class="wnkj_nodata" v-if="!data || data.length===0">暂无数据</div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: ""
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
    tableData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    formatTbale(d) {
      const formatKeys = ["uploadRate", "dateGr", "monthGr", "yearGr"];
      let arr = "";
      _.forIn(d, function(value, key) {
        if (formatKeys.indexOf(key) > -1) {
          arr += `<td>${value ? (value * 100).toFixed(2) + "%" : 0}</td>`;
        } else {
          arr += `<td>${value ? value : 0}</td>`;
        }
      });
      return arr;
    }
  }
};
</script>