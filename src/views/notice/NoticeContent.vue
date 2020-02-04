<template>
  <div>
    <el-page-header content="公告详情" @back="goBack" />
    <h1 class="title">{{ postInfo.title }}</h1>
    <div class="subtitle">发布日期：{{ postInfo.date }}</div>
    <div class="content">{{ postInfo.content }}</div>
  </div>
</template>

<script>
export default {
  name: 'NoticeContent',
  props: {},
  data() {
    return {
      postInfo: {
        title: '报名须知',
        date: '2016-05-01',
        content: '反对户籍卡了的骄傲克劳福德就是卡'
      }
    };
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
.title {
  text-align: center;
  margin-top: 40px;
  font-size: 20px;
}

.subtitle {
  text-align: center;
  font-size: 12px;
}

.content {
  width: 600px;
  margin: 40px auto 0;
  font-size: 14px;
}
</style>
