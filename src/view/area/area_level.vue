<template>
  <div class="area_level">
    <Form ref="formInline" class="i-form-define">
      <Row>
        <Col span="20">
          <FormItem label="统计方式：" :label-width="100">
            <Select v-model="formItem.anaysis" style="width:120px">
              <Option value="1">1</Option>
            </Select>
          </FormItem>
          <FormItem label="时间：" :label-width="80">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
          </FormItem>
        </Col>
        <Col span="4">
          <Button style="float:right;" type="primary">查询</Button>
        </Col>
      </Row>
    </Form>
    <Table :columns="columns10" :data="data9" border></Table>
  </div>
</template>
<script>
// import expandRow from "./table-expand.vue";
export default {
  name: "area_level",
  // components: { expandRow },
  data() {
    return {
      formItem: {
        area: "",
        anaysis: "",
        date: ""
      },
      columns10: [
        {
          title: "医疗机构等级",
          key: "name",
          align: "center",
          width: 120,
        },
        {
          title: "区域",
          key: "name",
          align: "center",
          width: 120,
        },
        {
          title: "收集量",
          align: "center",
          children: [
            {
              title: "感染性（kg）",
              key: "age",
              align: "center",
            },
            {
              title: "损伤性（kg）",
              key: "age",
              align: "center",
            },
            {
              title: "药物性（kg）",
              key: "age",
              align: "center",
            },
            {
              title: "病理性（kg）",
              key: "age",
              align: "center",
            },
            {
              title: "化学性（kg）",
              key: "age",
              align: "center",
            },
            {
              title: "合计（kg）",
              key: "age",
              align: "center",
            },
          ]
        },
        {
          title: "移交量",
          align: "center",
          children: [
            {
              title: "总量",
              key: "caddress",
              align: "center",
            },
            {
              title: "占比",
              key: "cname",
              align: "center",
            },
          ]
        },
        {
          title: "处置量",
          align: "center",
          children: [
            {
              title: "感染性（kg）",
              key: "age",
              align: "center",
            },
            {
              title: "损伤性（kg）",
              key: "age",
              align: "center",
            },
            {
              title: "药物性（kg）",
              key: "age",
              align: "center",
            },
            {
              title: "病理性（kg）",
              key: "age",
              align: "center",
            },
            {
              title: "化学性（kg）",
              key: "age",
              align: "center",
            },
            {
              title: "合计（kg）",
              key: "age",
              align: "center",
            },
          ]
        }
      ],
      data9: []
    };
  }
};
</script>
