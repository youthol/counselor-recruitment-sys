<template>
  <div class="content-form">
    <h3>Step 4</h3>
    <el-row class="form-explain">
      <i class="el-icon-info"></i>
      <span>说明：学生干部情况为必填项，否则影响审核结果。</span>
    </el-row>
    <el-row class="content-btn-group">
      <el-button size="small" :disabled="activeStep === 0" @click="handlePrev">上一步</el-button>
      <el-button type="primary" size="small" :disabled="activeStep === 0" @click="handleNext">完成并提交</el-button>
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
