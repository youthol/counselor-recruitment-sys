<template>
  <base-layout>
    <!-- header -->
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
            v-for="menu in menus"
            :key="menu.path"
            :index="menu.index"
          >
            {{ menu.name }}
          </el-menu-item>
        </el-menu>
      </div>
      <div class="user-operation">
        <!-- <span>admin</span> -->
        <el-dropdown placement="bottom" @command="handleClick">
          <span v-if="checkLogin" class="el-dropdown-link">
            <span style="padding:0 10px">{{ username }}</span>
            <i class="iconfont icon-caozuo"></i>
          </span>
          <span v-else class="el-dropdown-link" @click="handleLogin">未登录</span>
          <el-dropdown-menu v-if="checkLogin" slot="dropdown">
            <el-dropdown-item command="1">修改密码</el-dropdown-item>
            <el-dropdown-item command="2">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </template>

    <!-- content -->
    <template slot="content">
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
import navData from '@/router/nav.json';
import BaseLayout from '@/layouts/BaseLayout';

export default {
  name: 'Index',
  components: {
    BaseLayout
  },
  data() {
    return {
      username: '张无忌'
    };
  },
  mounted() {
    console.log('store', this.$store);
    console.log('route', this.$route);
  },
  computed: {
    menus() {
      return this.checkAdmin(this.$route.path) ? navData.admin : navData.client;
    },
    activeIndex() {
      const path = this.$route.path;
      return path ? path : this.navData[0].path;
    },
    checkLogin() {
      return true;
    }
  },
  methods: {
    checkAdmin(path) {
      return /^\/admin/.test(path);
    },
    handleLogin() {
      console.log('login');
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(command) {
      console.log(command);
    }
  }
};
</script>
