<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="证件号码">
      <el-input v-model="form.num" placeholder="请输入身份证号或电话号码"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.pwd" placeholder="请输入密码"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
      <el-button @click="close">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Login',
  props: {
    close: Function
  },
  data() {
    return {
      form: {
        num: '',
        pwd: ''
      }
    };
  },
  computed: {},
  methods: {
    onSubmit() {
      alert('submit!');
    }
  }
};
</script>

<style scoped>
</style>