<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/calendar" class="item" active-class="selected">
      <Icon name="calendar"/>
      明细
    </router-link>
    <router-link to="/reports" class="item" active-class="selected">
      <Icon name="reports"/>
      报告
    </router-link>
  </nav>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';
export default {
  name: 'Nav',
  components: {Icon}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  flex-direction: row;
  font-size: 12px;
  justify-content: space-between;
  > .item{
    color: lighten($color-highlight,10%);
    padding: 8px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon{
      width: 20px;
      height: 20px;
    }
  }
  > .item.selected{
    color:$color-highlight;
  }

}


</style>