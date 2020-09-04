<template>
  <div class="parts">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"/>
    </div>

  </div>

</template>

<script lang="ts">
export default {
  name: 'Parts'
};
</script>

<style lang="scss" scoped>


</style>