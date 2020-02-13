<template>
  <div class="content-container">
    <el-page-header content="公告详情" @back="goBack" />
    <notice-content />
  </div>
</template>

<script>
import NoticeContent from '@/components/NoticeContent';

export default {
  name: 'NoticeContent',
  components: {
    NoticeContent
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    goBack() {
      // TODO:测试代码
      console.log('go back');
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.content-container {
  margin-bottom: 20px;
}
</style>
