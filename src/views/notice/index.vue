<template>
  <div v-loading="loading" style="height: 100%;">
    <notice-table v-if="!showContent" />
    <notice-content v-else />
  </div>
</template>

<script>
import NoticeContent from './NoticeContent';
import NoticeTable from './NoticeTable';

export default {
  name: 'Notice',
  components: {
    NoticeContent,
    NoticeTable
  },
  data() {
    return {
      showContent: false,
      loading: false
    };
  },
  computed: {},
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: 'fetchNoticeContent'
  },
  methods: {
    checkQuery() {
      console.log(this.$route.query);
    },
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

<style lang="scss" scoped></style>
