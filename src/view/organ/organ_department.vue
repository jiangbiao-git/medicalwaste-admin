<template>
  <div class="area_department">
    <Form ref="formInline" class="i-form-define">
      <Row>
        <Col span="20">
          <FormItem label="选择区域：" :label-width="100">
            <Select v-model="formItem.area" style="width:120px">
              <Option value="1">1</Option>
            </Select>
          </FormItem>
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
  name: "area_department",
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
          title: "医院",
          key: "name",
          align: "center",
          width: 100,
        },
        {
          title: "科室",
          key: "name",
          align: "center",
          width: 100,
        },
        {
          title: "收集量",
          align: "center",
          children: [
            {
              title: "感染性",
              key: "age",
              align: "center",
            },
            {
              title: "损伤性",
              key: "age",
              align: "center",
            },
            {
              title: "药物性",
              key: "age",
              align: "center",
            },
            {
              title: "病理性",
              key: "age",
              align: "center",
            },
            {
              title: "化学性",
              key: "age",
              align: "center",
            },
            {
              title: "合计",
              key: "age",
              align: "center",
            }
          ]
        },
        {
          title: "移交量",
          align: "center",
          children: [
            {
              title: "感染性",
              key: "caddress",
              align: "center",
            },
            {
              title: "损伤性",
              key: "cname",
              align: "center",
            },
            {
              title: "药物性",
              key: "cname",
              align: "center",
            },
            {
              title: "病理性",
              key: "cname",
              align: "center",
            },
            {
              title: "化学性",
              key: "cname",
              align: "center",
            },
            {
              title: "合计",
              key: "cname",
              align: "center",
            }
          ]
        }
      ],
      data9: [
        {
          name: "jiangsu",
          label: "江苏",
          children: [
            {
              name: "nanjing",
              label: "南京",
              children: [
                {
                  name: "fuzimiao",
                  label: "夫子庙"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
