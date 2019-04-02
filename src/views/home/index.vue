<template>
  <div>
    <h1>This is home page!</h1>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'home',
  components: {
    HelloWorld
  }
};
</script>
