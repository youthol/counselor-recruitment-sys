<template>
  <el-form ref="form" :model="formData" label-width="80px" class="form">
    <el-form-item label="证件号码">
      <el-input v-model="formData.num" placeholder="请输入身份证号或电话号码" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formData.pwd" placeholder="请输入密码" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
      <span class="tip">还没有账号？点击这里</span>
      <el-button type="text" class="register">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'AccountForm',
  props: {
    close: Function
  },
  data() {
    return {
      formData: {
        num: '',
        pwd: ''
      }
    };
  },
  computed: {},
  methods: {
    onSubmit() {
      // TODO
      /**
       * 1. 登录逻辑
       * 2. loading动画
       */
      this.$store.dispatch('login/login');
      this.$router.replace('notice');
    }
  }
};
</script>

<style scoped>
.form {
  width: 360px;
  margin: 60px auto 0;
}

.tip {
  padding-left: 12px;
  font-size: 12px;
}

.register {
  text-decoration: underline;
  font-size: 12px;
}
</style>
