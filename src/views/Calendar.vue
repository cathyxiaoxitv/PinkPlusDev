<template>
  <Layout>
    <p slot="header"  class="title">日历</p>
    <div slot="body"> 我来自Calendar
    </div>
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
