<template >
  <Layout>
    <Tabs slot="header" class-prefix="interval" :data-source="array1" :value.sync="interval"/>
    <div slot="body">
      <NumericInput placeholder="touch to input" v-model="amount" />

    </div>
  </Layout>
</template>

<script lang="ts">

import {NumericInput} from 'numeric-keyboard'
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Money/Tabs.vue';


@Component({
  components: {Tabs,NumericInput}})
export default class Reports extends Vue{
  array1 = [{text:'月度报告',value:'monthly'},{text:'年度报告',value:'yearly'}]
  interval='monthly'
};
</script>

<style scoped lang="'scss">

</style>