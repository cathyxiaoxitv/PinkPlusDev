<template>
  <Details>
    <p>记录</p>
    <label >
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