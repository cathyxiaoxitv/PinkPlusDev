<template>
  <div class="layout-wrapper">
    <div class="content">
      <header>
        <slot name="header"/>
      </header>
      <slot name="body"/>
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
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  //高度只能占一屏
  .content {
    overflow: auto;
    //多了就自己加滚动条吧
    flex-grow: 1;
    header{
      height:50px;
      background: #F8F8F8;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}

</style>