<template>
  <el-container class="page">
    <el-header class="page__hd">Header</el-header>
    <el-main class="page__bd">
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
        <router-view/>
      </div>
    </el-main>
    <el-footer class="page__ft">Footer</el-footer>
  </el-container>
</template>

<script>
import './style.scss';
import navsData from '@/router/nav.json';
export default {
  name: 'Index',
  mounted() {
    console.log('store', this.$store);
    console.log('route', this.$route);
    console.log(navsData, this.checkAdmin(this.$route.path));
  },
  methods: {
    checkAdmin(path) {
      return /^\/admin/.test(path);
    }
  }
};
</script>
