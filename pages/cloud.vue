<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      prop="skuId"
      label="屈臣氏SKU编码"
      width="180"
    ></el-table-column>
    <el-table-column
      prop="availableStockQty"
      label="渠道可用库存"
      width="180"
    ></el-table-column>
    <el-table-column prop="sumStockQty" label="渠道总库存"></el-table-column>
  </el-table>
</template>

<script>
import { b2cInventorySearch } from '@/api/cloud'
export default {
  data() {
    return {
      tableData: [],
      // tableData: [
      //   {
      //     date: '2016-05-02',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1518 弄',
      //   },
      //   {
      //     date: '2016-05-04',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1517 弄',
      //   },
      //   {
      //     date: '2016-05-01',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1519 弄',
      //   },
      //   {
      //     date: '2016-05-03',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1516 弄',
      //   },
      // ],
    }
  },
  created() {
    // B2C销售库存
    b2cInventorySearch({
      page: 1,
      size: 10,
    }).then((res) => {
      console.log('b2cInventorySearch res', res)
      if (res && res.payload && res.payload.content) {
        this.tableData = res.payload.content
      }
    })
  },
}
</script>

<!--<style scoped lang="scss"></style>-->
