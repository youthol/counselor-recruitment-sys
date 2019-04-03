<template>
  <el-container class="page">
    <el-header class="page__hd">
      <slot name="header"></slot>
    </el-header>
    <el-main class="page__bd">
      <slot name="content"></slot>
    </el-main>
    <el-footer class="page__ft">
      <div>© {{ dateRange }} 山东理工大学学生工作处</div>
    </el-footer>
  </el-container>
</template>

<script>
import './style.scss';
export default {
  name: 'BaseLayout',
  computed: {
    dateRange() {
      const start = 2016;
      const current = new Date().getFullYear();
      return `${start}-${current}`;
    }
  }
};
</script>
