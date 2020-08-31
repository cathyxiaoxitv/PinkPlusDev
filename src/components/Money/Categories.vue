<template>
  <Details>
    <div slot="title" class="title">分类</div>
    <ul slot="content" class="tagList">
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
import Button from '@/components/Money/Button.vue';

export default {
  name: 'Categories',
  components: {Button, Details}
};
</script>

<style lang="scss" scoped>
.details {
  display: contents;

  > .title {
    padding: 15px;

  }

  > .tagList {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    overflow-x: auto;

    > li {
      border: 1px solid lightgray;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 12px;
      width: 100px;
      height: 77px;
    }

  }
}


</style>