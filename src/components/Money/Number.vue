<template>
  <Details>
    <p>支出</p>
    <label >
      <input type="text" class="inputBox">
    </label>
  </Details>
</template>

<script lang="ts">
import Details from '@/components/Money/Details.vue';

export default {
  name: 'Number',
  components: {Details}
};
</script>

<style lang="scss" scoped>
.expense {
  .name {

  }

  input {
  }
}
</style>