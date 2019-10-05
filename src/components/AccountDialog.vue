<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    center
    :show-close="false"
    :close-on-click-modal="false"
    custom-class="account-dialog"
  >
    <slot>表单</slot>
  </el-dialog>
</template>

<script>
export default {
  name: 'AccountDialog',
  props: {
    visible: Boolean,
    title: String
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
  }
};
</script>

<style>
.account-dialog {
  width: 50%;
  min-width: 310px;
  max-width: 500px;
}
</style>