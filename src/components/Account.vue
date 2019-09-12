<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    center
    :show-close="false"
    :close-on-click-modal="false"
  >
    <slot>表单</slot>
    <span slot="footer" class="dialog-footer">
      <!-- $emit用来触发一个close事件 -->
      <el-button @click="$emit('close')">取 消</el-button>
      <el-button type="primary" @click="$emit('close')">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'Account',
  props: {
    visible: Boolean,
    title: String
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
</style>