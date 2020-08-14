<template>
  <div class="nav-wrapper">
    <div class="content">
    <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Layout'
};
</script>

<style lang="scss" scoped>
.nav-wrapper{
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  height: 100vh;
  //高度只能占一屏
}
.content{
  border:1px solid blue;
  overflow: auto;
  //多了就自己加滚动条吧
  flex-grow:1;
}

</style>