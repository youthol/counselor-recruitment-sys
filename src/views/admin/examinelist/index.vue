<template>
  <div>
    <el-tabs
      v-model="activeName"
      type="card"
      stretch="true"
      class="tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane name="1">
        <span slot="label"><i class="el-icon-date"></i> 待审核</span>
      </el-tab-pane>
      <el-tab-pane label="已通过" name="2" />
      <el-tab-pane label="未通过" name="3" />
    </el-tabs>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="序号" width="120"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="140"> </el-table-column>
      <el-table-column prop="phone" label="联系方式" width="180">
      </el-table-column>
      <el-table-column prop="id_card" label="身份证号"> </el-table-column>
      <el-table-column prop="manager" label="管理" width="140">
      </el-table-column>
      <el-table-column prop="state" label="状态" width="140"> </el-table-column>
      <el-table-column prop="submit_times" label="提交次数" width="140">
      </el-table-column>
      <el-table-column prop="year" label="报名年份" width="140">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '1',
      tableData: [
        {
          id: 99999,
          name: '王小虎',
          phone: 12345678901,
          id_card: 123456789012345678,
          manager: '未知',
          state: '待审核',
          submit_times: 3,
          year: 2020
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {}
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  width: 300px;
}
</style>
