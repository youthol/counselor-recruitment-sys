<template>
  <div>
    <h1 class="title">{{ postInfo.title }}</h1>
    <div class="subtitle">发布日期：{{ postInfo.date }}</div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="content" v-html="postInfo.content"></div>
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
        content: '测试'
      }
    };
  }
};
</script>

<style scoped>
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
  width: 900px;
  margin: 40px auto 0;
  font-size: 14px;
  word-wrap: break-word;
  word-break: break-all;
}
</style>
