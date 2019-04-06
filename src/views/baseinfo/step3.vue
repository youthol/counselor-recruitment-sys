<template>
  <div class="content-form">
    <h3>Step 3</h3>
    <el-row class="form-explain">
      <i class="el-icon-info"></i>
      <span class="form-explain__title">说明：</span>
      <span>若无工作经历，此项可跳过。</span>
    </el-row>
    <el-row class="content-btn-group">
      <el-button size="small" :disabled="activeStep === 0" @click="handlePrev">上一步</el-button>
      <el-button size="small" :disabled="activeStep === 3" @click="handleNext">下一步</el-button>
    </el-row>
  </div>
</template>

<script>
import baseinfoMixin from '@/mixins/baseinfo-mixin';
export default {
  name: 'step3',
  mixins: [baseinfoMixin],
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
