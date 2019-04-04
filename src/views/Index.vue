<template>
  <base-layout>
    <!-- header -->
    <template v-slot:header>
      <img src="../assets/images/SDUT_logo@203x203.png" alt="LOGO" class="page__logo" />
      <div class="page__nav">
        <el-menu
          router
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
        <el-dropdown placement="bottom" @command="handleClick">
          <span v-if="checkLogin" class="dropdown-link">
            <span class="user-name">{{ username }}</span>
            <i class="iconfont icon-denglu"></i>
          </span>
          <span v-else class="dropdown-link" @click="handleLogin">未登录</span>
          <el-dropdown-menu v-if="checkLogin" slot="dropdown">
            <el-dropdown-item command="1">
              <i class="iconfont icon-bianji"></i>
              <span>修改密码</span>
            </el-dropdown-item>
            <el-dropdown-item command="2">
              <i class="iconfont icon-tuichu"></i>
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </template>

    <!-- content -->
    <template v-slot:content>
      <h3>{{ title || '首页' }}</h3>
      <!-- <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div> -->
      <div class="content__bd">
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
    title() {
      return this.$route.meta.title;
    },
    menus() {
      return this.checkAdmin(this.$route.path) ? navData.admin : navData.client;
    },
    activeIndex() {
      let path = this.menus.some(el => el.path.includes(this.$route.path));
      console.log('path', path);
      return path ? this.$route.path : '';
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
