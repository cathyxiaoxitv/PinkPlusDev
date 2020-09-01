<template>
  <button @submit="onValueChanged">支出输入</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default class Button extends Vue{
  onValueChanged(){
    console.log('hi');
  }
}


</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
button {
  width: 90vw;
  background: $color-highlight;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  color: white;
  font-weight: bold;
  margin: 20px auto 40px;
  border-radius: 20px;
}
</style>