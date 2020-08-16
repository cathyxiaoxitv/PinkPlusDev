<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
name: "Types"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.types {
  background: #F8F8F8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > li {
    border-radius: 5px;
    padding: 3px 35px;
    font-weight: bold;
    color: $color-highlight;
    background: #E8E8E9;

    &.selected {
      background: $color-highlight;
      color: white;
    }
  }
}
</style>