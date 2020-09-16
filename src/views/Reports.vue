<template >
  <Layout>
    <Tabs slot="header" class-prefix="interval" :data-source="array1" :value.sync="interval"/>
    <div slot="body">
      <Date @update:value = "record.createdAt = $event"/>
    </div>
  </Layout>
</template>

<script lang="ts">


import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Money/Tabs.vue';
import Date from '@/components/Money/DatePicker'


@Component({
  components: {Tabs}})
export default class Reports extends Vue{
  array1 = [{text:'月度报告',value:'monthly'},{text:'年度报告',value:'yearly'}]
  interval='monthly'
};
</script>

<style scoped lang="'scss">

</style>