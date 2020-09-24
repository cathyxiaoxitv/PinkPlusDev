<template>
  <div class="wrapper">
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

.wrapper{
  margin: 5px 0;
  //border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  p{
    font-weight: bold;
  }
  .title{
    //border: 1px solid blue;
    padding: 0 20px;
  }
  .content{
    //border: 1px solid green;
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-calendar-picker,.ant-input{
      width: 250px;
      margin: 5px 0;
    }
  }
}

</style>