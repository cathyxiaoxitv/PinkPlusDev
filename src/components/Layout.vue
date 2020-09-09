<template>
  <div class="layout-wrapper">
      <header>
        <slot name="header"/>
      </header>
    <main>
      <slot name="body"/>
    </main>
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
  height: 100%;
  //高度只能占一屏
  header{
    height:50px;
    background: #F8F8F8;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  main {
    overflow: auto;
    //多了就自己加滚动条吧
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}

</style>