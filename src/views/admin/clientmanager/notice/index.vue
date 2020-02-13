<template>
  <div class="notice-container">
    <div class="sub-container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.notice-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.sub-container {
  width: 94%;
  margin-left: 20px;
}
</style>
