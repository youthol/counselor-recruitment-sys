<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="通知名称" />
      <el-table-column prop="date" label="发布日期" width="200" />
      <el-table-column
        prop="tag"
        label="查看状态"
        width="300"
        :filters="[
          { text: '已看', value: '已看' },
          { text: '未看', value: '未看' }
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '未看' ? 'primary' : 'success'"
            close-transition
          >
            {{ scope.row.tag }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'NoticeTable',
  data() {
    return {
      tableData: [
        {
          title: '报名须知',
          date: '2016-05-01',
          tag: '已看'
        },
        {
          title: '最新通知',
          date: '2016-05-02',
          tag: '未看'
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    }
  }
};
</script>

<style lang="scss" scoped></style>
