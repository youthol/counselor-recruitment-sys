<template>
  <div>
    <notice-table />
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
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
