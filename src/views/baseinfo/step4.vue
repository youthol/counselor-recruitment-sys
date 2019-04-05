<template>
  <div class="content-form">
    <h3>Step 4</h3>
    <el-row class="form-explain">
      <i class="el-icon-info"></i>
      <span>说明：学生干部情况为必填项，否则影响审核结果。</span>
    </el-row>
    <el-row class="content-btn-group">
      <el-button size="small" @click="handlePrev">上一步</el-button>
      <el-button size="small" @click="handleNext">下一步</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'step4',
  methods: {
    handlePrev() {
      this.$emit('prev');
    },
    handleNext() {
      this.$emit('next');
    }
  }
}
</script>
