<template>
  <div class="card">
    <h1 class="headline" :class="{ headlineLogin: checkLogin }">
      欢迎使用 {{ year }} 年辅导员招聘系统
    </h1>

    <account-form />
  </div>
</template>

<script>
import AccountForm from '@/components/AccountForm';

export default {
  name: 'Home',
  components: {
    AccountForm
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  computed: {
    checkLogin() {
      return this.$store.state.login.isLogin;
    }
  },
  methods: {
    readNotice() {
      this.$router.push('notice');
    },
    entry() {
      this.$router.push('baseinfo');
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.$store.state.login.isLogin) {
        next({
          path: 'notice',
          query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    });
  }
};
</script>

<style scoped>
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
