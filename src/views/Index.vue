<template>
  <base-layout>
    <template slot="header">
      <img src="../assets/logo.png" alt="LOGO" class="page__logo" />
      <div class="page__nav">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          text-color="#ffffff"
          active-text-color="#008aff"
          background-color="#2d3a4b"
          @select="handleSelect"
        >
          <el-menu-item
            v-for="nav in navItems"
            :key="nav.path"
            :index="nav.index"
          >
            {{ nav.name }}
          </el-menu-item>
        </el-menu>
      </div>
    </template>
    <template slot="main">
      <h3>填写资料</h3>
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
        <router-view />
      </div>
    </template>
  </base-layout>
</template>

<script>
import './style.scss';
import navsData from '@/router/nav.json';
import BaseLayout from '@/layouts/default/BaseLayout';

export default {
  name: 'Index',
  components: {
    BaseLayout
  },
  data() {
    return {
      // activeIndex: '1'
    };
  },
  mounted() {
    console.log('store', this.$store);
    console.log('route', this.$route);
    console.log(this.navItems);
  },
  computed: {
    navItems() {
      return this.checkAdmin(this.$route.path)
        ? navsData.admin
        : navsData.client;
    },
    activeIndex() {
      const path = this.$route.path;
      return path ? path : this.navItems[0].path;
    }
  },
  methods: {
    checkAdmin(path) {
      return /^\/admin/.test(path);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
