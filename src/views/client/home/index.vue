<template>
  <div class="card">
    <h1 class="headline" :class="{ headlineLogin: checkLogin }">
      欢迎使用 {{ year }} 年辅导员招聘系统
    </h1>

    <div v-if="checkLogin" class="btns">
      <el-button
        type="primary"
        icon="el-icon-warning-outline"
        @click="readNotice"
      >
        阅读通知
      </el-button>
      <el-button plain type="success" class="start-btn" @click="entry">
        开始报名
      </el-button>
    </div>
    <account-form v-else />
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

.btns {
  text-align: center;
  margin: 70px 0 0;
}

.start-btn {
  margin-left: 30px;
}

.card-margin {
  margin-top: 40px;
}

.btn-con {
  text-align: center;
  margin-top: 80px;
}
</style>
