<template>
  <div class="notice-table-container">
    <div class="sub-container">
      <!-- <notice-table /> -->
      <notice-content />
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
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.notice-table-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.sub-container {
  width: 94%;
  margin-left: 20px;
}
</style>
