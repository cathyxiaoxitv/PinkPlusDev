<template>
  <Details>
    <p>分类</p>
  </Details>
</template>

<script lang="ts">

import Details from '@/components/Money/Details.vue';
export default {
  name: 'Tags',
  components: {Details}
};
</script>

<style lang="scss" scoped>

.tags{
  .title{
    padding: 25px 0 ;
  }
  .current {
    max-width: 360px;
    max-height: 330px;
    display: flex;
    flex-wrap: wrap;
    margin-right: auto;
    margin-left: auto;
    overflow: auto;

    > li {
      min-width: 33.3vw;
      height: 77px;
      border: 1px solid lightgray;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 16px;
      position: relative;
      border-radius: 5px;
    }
  }

}


</style>