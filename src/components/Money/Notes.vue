<template>
  <Details>
    <p>记录</p>
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
.notes {
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    flex-grow: 1;
    border: none;
    padding-right: 16px;

  }
}
</style>