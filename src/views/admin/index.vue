<template>
  <div class="card">
    <h1 class="headline">
      辅导员招聘 - 后台管理系统
    </h1>
    <account-form />
  </div>
</template>

<script>
import AccountForm from '@/components/AccountForm';

export default {
  name: 'Admin',
  components: {
    AccountForm
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 600px;
  margin: 20px auto 0;
  padding: 50px 0;
  box-shadow: 0 2px 14px 2px rgb(212, 212, 212);
  border-radius: 6px;
}

.headline {
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
}
</style>
