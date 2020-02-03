<template>
  <base-layout>
    <!-- header -->
    <template v-slot:header>
      <img
        src="../assets/images/SDUT_logo@203x203.png"
        alt="LOGO"
        class="page__logo"
      />
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
            :index="menu.path"
          >
            {{ menu.name }}
          </el-menu-item>
        </el-menu>
      </div>
      <div class="user-operation">
        <!-- 已登录 -->
        <el-dropdown
          v-if="checkLogin"
          placement="bottom"
          @command="handleClick"
        >
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
          <span
            class="dropdown-link"
            title="点击注册"
            data-key="1"
            @click="toAccountPage"
          >
            注册
          </span>
          <span
            class="dropdown-link login"
            data-key="2"
            title="点击登录"
            @click="toAccountPage"
          >
            登录
          </span>
        </div>
      </div>
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

export default {
  name: 'Index',
  components: {
    BaseLayout
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
  computed: {
    title() {
      return this.$route.meta.title;
    },
    menus() {
      if (this.checkAdmin(this.$route.path)) {
        return navData.admin;
      } else if (this.checkLogin) {
        return navData.clientLogin;
      } else {
        return navData.clientQuit;
      }
    },
    activeIndex() {
      const isMenuRoute = this.menus.some(el =>
        el.path.includes(this.$route.path)
      );
      return isMenuRoute ? this.$route.path : '';
    },
    checkLogin() {
      return this.$store.state.login.isLogin;
    }
  },
  mounted() {
    console.log('store', this.$store);
    console.log('route', this.$route);
  },
  methods: {
    checkAdmin(path) {
      const pattern = /^\/admin/;
      return pattern.test(path);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    /**
     * 下拉项点击函数
     */
    handleClick(command) {
      if (command === '2') {
        this.$confirm('确定要退出吗？', '注意', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('login/logout');
          this.$router.push('home');
        });
      }
    },
    toAccountPage() {
      const pattern = /^\/home/;
      if (pattern.test(this.$route.path)) {
        this.$message({
          message: '请将信息填写完整！',
          type: 'warning'
        });
        return;
      }
      this.$router.replace('home');
    }
  }
};
</script>
