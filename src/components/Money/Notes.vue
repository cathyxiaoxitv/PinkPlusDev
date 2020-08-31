<template>
  <Details>
    <p slot="title">记录</p>
    <label slot="content">
      <input type="text" placeholder="未输入">
    </label>
  </Details>
</template>

<script lang="ts">
import Details from '@/components/Money/Details.vue';
export default {
  name: 'Notes',
  components: {Details}
};
</script>

<style lang="scss" scoped>
  input {
    border: none;
  }

</style>