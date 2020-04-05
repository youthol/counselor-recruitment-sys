<template>
  <div class="client-manager-container">
    <el-menu
      router
      :default-active="activeIndexPath"
      class="el-menu-vertical"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item :index="menus[0].path">
        <i class="el-icon-bell"></i>
        <span slot="title">{{ menus[0].name }}</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-warning-outline"></i>
          <span>{{ menus[1].name }}</span>
        </template>
        <el-menu-item
          v-for="(item, index) in menus[1].children"
          :key="index"
          :index="item.path"
        >
          {{ item.name }}
        </el-menu-item>
      </el-submenu>

      <el-menu-item :index="menus[2].path">
        <i class="el-icon-document"></i>
        <span slot="title">{{ menus[0].name }}</span>
      </el-menu-item>
    </el-menu>

    <div class="content-container">
      <div class="sub-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import navData from '@/router/nav';

export default {
  name: 'ClientManager',
  data() {
    return {
      activeIndexPath: '/admin/clientmanager/notice',
      menu: [
        {
          title: '公告发布'
        }
      ]
    };
  },
  computed: {
    menus() {
      return navData.clientManager;
    }
  },
  watch: {
    $route: 'changeActiveIndex'
  },
  mounted() {
    this.changeActiveIndex();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // $route 发生变化时调用
    changeActiveIndex() {
      for (const element of this.menus) {
        // 嵌套路由
        if (
          typeof element.path === 'undefined' &&
          Array.isArray(element.children)
        ) {
          for (const item of element.children) {
            if (this.$route.path.includes(item.path)) {
              this.activeIndexPath = item.path;
              return;
            }
          }
        } else if (this.$route.path.includes(element.path)) {
          this.activeIndexPath = element.path;
          return;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical {
  min-width: 200px;
}

.client-manager-container {
  display: flex;
}

.content-container {
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.sub-container {
  width: 94%;
  margin-left: 20px;
}
</style>
