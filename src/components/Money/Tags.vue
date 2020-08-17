<template>
  <Details>
    <p>分类</p>
    <ul>
    <li>饮食费</li>
    <li>日用品</li>
    <li>衣服</li>
    <li>美容</li>
    <li>交际费</li>
    <li>医疗费</li>
    <li>教育费</li>
    <li>水电费</li>
    <li>交通费</li>
    <li>电话费</li>
    <li>房费</li>
    <li>编辑 ></li>
  </ul>
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

  > ul {

    display: flex;
    flex-wrap: wrap;

    overflow: auto;

    > li {

    }
}




</style>