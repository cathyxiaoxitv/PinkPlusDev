<template>
  <div>
    <ul class="types">
      <li :class="type === '-' &&'selected'"
          @click="selectType('-')">支出</li>
      <li :class="type === '+' &&'selected'"
      @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Types",
  props: ['xxx'],
  data() {
    return {
      type: '-'
    }
  },
  mounted() {
    console.log(this.xxx);
  },
  methods:{
    selectType(type){
      if(type !== '-' && type !== '+'){
        throw new Error('type is unknown')
      }
      this.type = type
    }
  }
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