<template>
  <div>
    <h1>欢迎使用2020年辅导员招聘系统</h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="通知名称"></el-table-column>
      <el-table-column prop="date" label="发布日期" width="300"></el-table-column>
      <el-table-column
        prop="tag"
        label="查看状态"
        width="300"
        :filters="[{ text: '已看', value: '已看' }, { text: '未看', value: '未看' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '未看' ? 'primary' : 'success'"
            close-transition
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      tableData: [
        {
          title: '最新通知1',
          date: '2016-05-02',
          tag: '已看'
        },
        {
          title: '最新通知2',
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
  },
  components: {}
};
</script>
