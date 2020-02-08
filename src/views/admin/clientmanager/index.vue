<template>
  <div>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu>
      <!-- <el-menu-item index="1">处理中心</el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'ClientManager',
  data() {
    return {
      menu: [
        {
          title: '公告发布'
        }
      ]
    }
  }
};
</script>

<style></style>
