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
          <el-menu-item v-for="menu in menus" :key="menu.path" :index="menu.index">{{ menu.name }}</el-menu-item>
        </el-menu>
      </div>
      <div class="user-operation">

        <!-- 已登录 -->
        <el-dropdown placement="bottom" @command="handleClick" v-if="checkLogin">
          <span class="dropdown-link">
            <span class="user-name">{{ username }}</span>
            <i class="iconfont icon-denglu"></i>
          </span>
          <!-- 登录后用户图标下拉菜单 -->
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

        <!-- 未登录 -->
        <div v-else>
          <span class="dropdown-link" @click="handleAccount" title="点击注册" data-key="1">注册</span>
          <span class="dropdown-link login" @click="handleAccount" title="点击登录" data-key="2">登录</span>
        </div>
      </div>
      
      <!-- 登录、注册弹窗 -->
      <account-dialog
        v-if="dialogShow"
        :visible="dialogShow"
        :title="dialogInfo.title"
      >
        <login :close="closeDialog" />
      </account-dialog>
    </template>

    <!-- content -->
    <template v-slot:content>
      <h3 class="content__title">{{ title || '首页' }}</h3>
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
import AccountDialog from '@/components/AccountDialog';
import Login from '@/components/Login';

export default {
  name: 'Index',
  components: {
    BaseLayout,
    AccountDialog,
    Login
  },
  data() {
    return {
      username: '张无忌',
      dialogShow: false, // 显示弹出层
      dialogInfo: {
        title: null
      }
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
      const isMenuRoute = this.menus.some(el =>
        el.path.includes(this.$route.path)
      );
      return isMenuRoute ? this.$route.path : '';
    },
    checkLogin() {
      return false;
    }
  },
  methods: {
    checkAdmin(path) {
      const pattern = /^\/admin/;
      return pattern.test(path);
    },
    handleAccount(e) {
      // 注册
      console.log(e.target.dataset);
      this.dialogShow = true;
      if (e.target.dataset.key === '1') {
        this.dialogInfo.title = '注册';
        return;
      }
      this.dialogInfo.title = '登录';
    },
    closeDialog() {
      this.dialogShow = false;
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
