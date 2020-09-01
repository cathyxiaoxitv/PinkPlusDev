<template >
  <Layout>
    <p slot='header'>日历</p>
    <div slot="body">我来自Calendar</div>
  </Layout>
</template>

<script lang="ts">

import Tabs from '@/components/Money/Tabs.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';


@Component({
  components: {Tabs}})
export default class Reports extends Vue{

};
</script>

<style scoped lang="'scss">

</style>