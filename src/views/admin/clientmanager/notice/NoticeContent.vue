<template>
  <div class="content-container">
    <el-page-header class="page-header" content="公告详情" @back="goBack" />
    <notice-content />
  </div>
</template>

<script>
import NoticeContent from '@/components/NoticeContent';

export default {
  name: 'AdminNoticeContent', // 为了区分，在前面添加一个Admin
  components: {
    NoticeContent
  }
};
</script>

<style scoped>
.content-container {
  margin-bottom: 40px;
}
</style>
