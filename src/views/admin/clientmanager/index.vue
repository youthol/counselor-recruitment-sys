<template>
  <div class="client-manager-container">
    <el-menu
      router
      default-active="1"
      :collapse="isCollapse"
      class="el-menu-vertical"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <i class="el-icon-bell"></i>
        <span slot="title">公告发布</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-warning-outline"></i>
          <span>说明管理</span>
        </template>
        <el-menu-item index="2-1">个人资料</el-menu-item>
        <el-menu-item index="2-2">审核状态</el-menu-item>
        <el-menu-item index="2-3">材料下载</el-menu-item>
      </el-submenu>

      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">材料发布</span>
      </el-menu-item>
    </el-menu>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ClientManager',
  data() {
    return {
      isCollapse: false,
      menu: [
        {
          title: '公告发布'
        }
      ]
    };
  },
  computed: {
    // currentPage: '1'
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      // TODO: 测试代码
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical {
  min-width: 200px;
  height: 100%;
}

.client-manager-container {
  display: flex;
  height: calc(100vh - 180px);
}
</style>
