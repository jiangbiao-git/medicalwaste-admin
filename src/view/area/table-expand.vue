// table-expand.vue
<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
<template>
  <div>
    <Table :columns="columns10" :data="row.children"></Table>
  </div>
</template>
<script>
export default {
  props: {
    row: Object
  },
  mounted(){
      console.log(this.row)
  },
  data() {
    return {
      columns10: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            });
          }
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "label",
          key: "label"
        }
      ]
    };
  }
};
</script>