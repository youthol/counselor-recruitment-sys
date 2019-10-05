<template>
  <base-layout>
    <template :slot="header"></template>
    <template :slot="content"></template>
  </base-layout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout';

export default {
  components: {
    BaseLayout
  },
  data() {
    return {
      
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style>

</style>