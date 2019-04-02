<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<script>
import './style.scss';
export default {
  name: 'Index',
  mounted() {
    console.log('store', this.$store);
    console.log('route', this.$route);
  }
};
</script>
