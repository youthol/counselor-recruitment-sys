<template>
  <div>
    <el-steps :active="activeStep" align-center>
      <el-step title="基本资料" icon="el-icon-document"/>
      <el-step title="教育经历" icon="el-icon-document"/>
      <el-step title="工作经历" icon="el-icon-document"/>
      <el-step title="校内实践" icon="el-icon-document"/>
    </el-steps>
    <!-- <teansition name="el-fade-in-linear" mode="out-in" appear :duration="1000"> -->
      <keep-alive>
        <component
          :is="currentStep"
          :active-step="activeStep"
          :is-edit="false"
          @submit="handleNext"
          @prev="handlePrev"
          @next="handleNext"
        />
      </keep-alive>
    <!-- </teansition> -->

    <!-- <el-button-group class="float-right">
      <el-button size="small" :disabled="activeStep === 0" @click="handlePrev">上一步</el-button>
      <el-button size="small" :disabled="activeStep === 4" @click="handleNext">{{ activeStep === 3 ? '完成' : '下一步'}}</el-button>
    </el-button-group> -->
  </div>
</template>

<script>
import './style.scss';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';

export default {
  name: 'baseinfo',
  components: {
    Step1,
    Step2,
    Step3,
    Step4
  },
  data() {
    return {
      activeStep: 1
    };
  },
  computed: {
    currentStep() {
      return `step${this.activeStep + 1}`;
    }
  },
  methods: {
    handlePrev() {
      if (this.activeStep > 0) {
        this.activeStep = this.activeStep - 1;
      }
    },
    handleNext(data) {
      console.log(data);
      if (this.activeStep < 3) {
        this.activeStep = this.activeStep + 1;
      } else {
        console.log('提交'); 
      }
    }
  }
};
</script>
