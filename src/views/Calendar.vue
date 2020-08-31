<template>
  <Layout>
    <p class="title">日历</p>
    <Calendar/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';

export default class Calendar extends Vue{
};
</script>

<style scoped lang="scss">
 .title{
   font-weight: bold;
 }

</style>
