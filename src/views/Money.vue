<template slot="header">
  <Layout>
    <Tabs slot="header" :data-source="recordTypeList" :value.sync="type"/>
    <div slot="body">
      <Date/>
      <Notes placeholder="在这里输入备注" @update:value="record.notes = $event"/>
      <Number :value.sync="record.amount"/>
      <Categories @update:value="record.category = $event"/>
      <button @click="saveRecord">确定</button>
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
import recordTypeList from '@/constants/recordTypeList';
import Date from '@/components/Money/Date.vue';

@Component({
  components: {Date, Categories,Number, Notes, Parts, Tabs}})

export default class Money extends Vue{
  get recordList(){
    return this.$store.state.recordList;
  }
  recordTypeList= recordTypeList
  type = '-'
  record: RecordItem = {
    category: [], notes: '', type: '-', amount: 0
  };
  saveRecord(){
    this.$store.commit('createRecord',this.record)
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
button {
  width: 300px;
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