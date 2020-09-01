<template slot="header">
  <Layout>
    <Tabs slot="header" :data-source="array" :value.sync="type"/>
    <div slot="body">
      <Notes/>
      <Number/>
      <Categories/>
      <button @click="saveRecord"/>
    </div>
  </Layout>
</template>

<script lang="ts">

import Vue from 'vue';
import Notes from '@/components/Money/Notes.vue';
import Number from '@/components/Money/Number.vue';
import Tabs from '@/components/Money/Tabs.vue';
import {Component} from 'vue-property-decorator';
import Parts from '@/components/Money/Parts.vue';
import Categories from '@/components/Money/Categories.vue';

@Component({
  components: {Categories,Number, Notes, Parts, Tabs}})

export default class Money extends Vue{
  get recordList(){
    return this.$store.state.recordList;
  }
  array = [{text:'支出',value:'-'},{text:'收入',value:'+'}]
  type = '-'
  saveRecord(){
    this.$store.commit('createRecord')
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
button{
width: 90vw;
background: $color-highlight;
border: none;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 0;
color: white;
font-weight: bold;
margin: 20px auto 40px;
border-radius: 20px;
}
</style>