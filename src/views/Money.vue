<template slot="header">
  <Layout>
    <Tabs slot="header" :data-source="array" :value.sync="type"/>
    <div slot="body">
      <Date/>
      <Notes/>
      <Number/>
      <Categories/>
      <Button/>
    </div>
  </Layout>
</template>

<script lang="ts">

import Vue from 'vue';
import Date from '@/components/Money/Date.vue';
import Notes from '@/components/Money/Notes.vue';
import Number from '@/components/Money/Number.vue';
import Button from '@/components/Money/Button.vue';
import Tabs from '@/components/Money/Tabs.vue';
import {Component} from 'vue-property-decorator';
import Details from '@/components/Money/Details.vue';
import Categories from '@/components/Money/Categories.vue';

@Component({
  components: {Categories, Button,Number, Notes, Date, Details, Tabs}})

export default class Money extends Vue{
  array = [{text:'支出',value:'-'},{text:'收入',value:'+'}]
  type = '-'
};
</script>
