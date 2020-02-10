<template>
  <div>
    <el-table
      v-loading="loading"
      :data="tableData"
      max-height="400"
      style="width: 100%"
      @cell-click="choseTitle"
    >
      <el-table-column type="selection" width="50"> </el-table-column>
      <el-table-column sortable prop="date" label="发布日期" width="210">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px;">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="340" prop="title" label="通知名称" />
      <el-table-column
        prop="state"
        label="发布状态"
        width="180"
        :filters="[
          { text: '已发布', value: '已发布' },
          { text: '未发布', value: '未发布' }
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.state === '未发布' ? 'danger' : 'info'"
            close-transition
          >
            {{ scope.row.state }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="260">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            查看
          </el-button>
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
          >
            编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      :total="10"
      class="pagination"
    />

    <div class="add-button">
      <el-button type="primary">
        <i class="el-icon-plus"></i>
        添加公告
      </el-button>

      <el-button-group class="btn-group">
        <el-tooltip
          class="item"
          effect="dark"
          content="批量操作"
          placement="top"
          open-delay="800"
        >
          <el-button>批量:</el-button>
        </el-tooltip>

        <el-tooltip
          class="item"
          effect="dark"
          content="发布"
          placement="top"
          open-delay="800"
        >
          <el-button>
            <i class="el-icon-bell"></i>
          </el-button>
        </el-tooltip>

        <el-tooltip
          class="item"
          effect="dark"
          content="取消发布"
          placement="top"
          open-delay="800"
        >
          <el-button>
            <i class="el-icon-close-notification"></i>
          </el-button>
        </el-tooltip>

        <el-tooltip
          class="item"
          effect="dark"
          content="删除"
          placement="top"
          open-delay="800"
        >
          <el-button>
            <i class="el-icon-delete"></i>
          </el-button>
        </el-tooltip>
      </el-button-group>
    </div>
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
          state: '已发布'
        },
        {
          id: 43,
          title: '最新通知',
          date: '2016-05-02',
          state: '未发布'
        },
        {
          id: 43,
          title: '最新通知',
          date: '2016-05-02',
          state: '未发布'
        },
        {
          id: 43,
          title: '最新通知',
          date: '2016-05-02',
          state: '未发布'
        },
        {
          id: 43,
          title: '最新通知',
          date: '2016-05-02',
          state: '未发布'
        },
        {
          id: 43,
          title: '最新通知',
          date: '2016-05-02',
          state: '未发布'
        },
        {
          id: 43,
          title: '最新通知',
          date: '2016-05-02',
          state: '未发布'
        }
      ]
    };
  },
  methods: {
    choseTitle(row) {
      console.log(row.id);
      this.$router.push({
        path: 'clientmanager',
        query: {
          type: 'notice',
          id: row.id
        }
      });
    },
    filterTag(value, row) {
      return row.state === value;
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
}

.add-button {
  margin-top: 50px;
}

.btn-group {
  margin-left: 20px;
}
</style>
