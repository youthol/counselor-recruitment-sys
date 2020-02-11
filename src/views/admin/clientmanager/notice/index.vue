<template>
  <div class="notice-table-container">
    <div class="sub-container">
      <notice-table v-if="!showContent" :loading="loading" />
      <notice-content v-else />
    </div>
  </div>
</template>

<script>
import NoticeTable from './NoticeTable';
import NoticeContent from './NoticeContent';

export default {
  name: 'Notice',
  components: {
    NoticeTable,
    NoticeContent
  },
  data() {
    return {
      showContent: false,
      loading: false
    };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: 'fetchNoticeContent'
  },
  methods: {
    fetchNoticeContent() {
      if (typeof this.$route.query.id === 'undefined') {
        this.showContent = false;
        return;
      }
      const postId = this.$route.query.id;
      console.log(`正在获取通知${postId}`);
      setTimeout(() => {
        console.log('通知获取成功!');
        this.loading = false;
        this.showContent = true;
      }, 1000);
      this.loading = true;
      console.log('获取中...');
    }
  }
};
</script>

<style lang="scss" scoped>
.notice-table-container {
  display: flex;
  justify-content: center;
}

.sub-container {
  width: 94%;
  margin-left: 20px;
}
</style>
