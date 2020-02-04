<template>
  <div>
    <el-table
      v-loading="loading"
      :data="tableData"
      max-height="450"
      style="width: 100%"
      @cell-click="choseTitle"
    >
      <el-table-column sortable prop="date" label="发布日期" width="260">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px;">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="title" label="通知名称">
        <template slot-scope="scope">
          <el-tooltip
            :enterable="false"
            class="item"
            effect="dark"
            content="点击查看详情"
            placement="right"
          >
            <span>{{ scope.row.title }}</span>
          </el-tooltip>
        </template>
      </el-table-column>

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
            :type="scope.row.tag === '未看' ? 'danger' : 'info'"
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
  props: {
    loading: Boolean
  },
  data() {
    return {
      tableData: [
        {
          id: 32,
          title: '报名须知',
          date: '2016-05-01',
          tag: '已看'
        },
        {
          id: 43,
          title: '最新通知',
          date: '2016-05-02',
          tag: '未看'
        }
      ]
    };
  },
  methods: {
    choseTitle(row) {
      console.log(row.id);
      this.$router.push({
        path: 'notice',
        query: {
          id: row.id,
          hideTitle: true
        }
      });
    },
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
