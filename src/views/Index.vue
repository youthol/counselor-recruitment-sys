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

      <!-- FIXME:前台登陆后直接切换到后台仍然显示登录的bug -->
      <div class="user-operation">
        <!-- 已登录 -->
        <el-dropdown v-if="isLogin" placement="bottom" @command="handleClick">
          <span class="dropdown-link">
            <span class="user-name">{{ username }}</span>
            <i class="iconfont icon-denglu"></i>
          </span>
          <!-- 登录后用户图标下拉菜单 -->
          <el-dropdown-menu slot="dropdown">
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
            v-if="!checkAdmin"
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
      <h3 v-if="title" class="content__title">{{ title }}</h3>
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
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('login');

export default {
  name: 'Index',
  components: {
    BaseLayout
  },
  data() {
    return {
      username: '张无忌',
      activeIndex: ''
    };
  },
  computed: {
    ...mapState(['isLogin', 'loginType']),
    title() {
      // 除了不设置meta中的title以外，还可以通过query中的hidenTitle来隐藏
      if (this.$route.query.hideTitle) {
        return;
      }
      return this.$route.meta.title;
    },
    menus() {
      if (this.checkAdmin) {
        if (this.loginType === 'admin') {
          return navData.adminLogin;
        } else {
          return navData.adminQuit;
        }
      } else if (this.loginType === 'client') {
        return navData.clientLogin;
      } else {
        return navData.clientQuit;
      }
    },
    checkAdmin(path) {
      const pattern = /^\/admin/;
      return pattern.test(this.$route.path);
    },
    userType() {
      if (this.checkAdmin) {
        return 'admin';
      } else {
        return 'client';
      }
    }
  },
  watch: {
    $route: 'changeActiveIndex'
  },
  mounted() {
    console.log('store', this.$store);
    console.log('route', this.$route);
    this.changeActiveIndex();
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
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
          if (this.checkAdmin) {
            this.$router.push('/admin');
          } else {
            this.$router.push('/');
          }
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
    },
    getMainMenuActiveIndex() {
      for (const element of this.$route.matched) {
        if (element.meta.mainMenuActiveIndex) {
          return element.meta.mainMenuActiveIndex;
        }
      }
      return;
    },
    changeActiveIndex() {
      // 检测route是否匹配到menu
      const isMenuRoute = this.menus.some(el =>
        el.path.includes(this.$route.path)
      );
      if (isMenuRoute) {
        this.activeIndex = this.$route.path;
        return;
      } else if (this.getMainMenuActiveIndex()) {
        for (const item of this.menus) {
          if (item.activeIndex === this.getMainMenuActiveIndex()) {
            this.activeIndex = item.path;
            return;
          }
        }
      }
      this.activeIndex = '';
    }
  }
};
</script>
