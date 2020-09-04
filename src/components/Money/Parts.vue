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

.parts {
  padding: 5px;
  display: flex;
  border-bottom: 1px solid lightgray;
  min-height: 50px;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;

  p {
    padding: 10px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 350px;
    min-height: 40px;
    padding: 0 10px;
    margin: 0 30px;
    border-radius: 5px;

    input{
      width: 300px;
      height: 40px;
    }
  }

}

</style>