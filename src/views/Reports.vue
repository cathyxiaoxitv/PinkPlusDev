<template>
  <Layout>
    <Tabs slot="header" class-prefix="interval" :data-source="array1" :value.sync="interval"/>
    <div slot="body">
      <a-month-picker/>
      <div>
        <ol>
          <li v-for="(group,index) in result" :key="index">
            <h3>{{ group.title}}</h3>
            <ol>
              <li v-for="item in group.item" :key="item.id">
                {{item.amount}}
                {{item.createdAt}}
                {{item.type}}
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">


import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Money/Tabs.vue';
import recordTypeList from "@/constants/recordTypeList";


@Component({
  components: {Tabs}
})
export default class Reports extends Vue {
  array1 = [{text: '月度报告', value: 'monthly'}, {text: '年度报告', value: 'yearly'}]
  interval = 'monthly'

  beforeCreate() {
    this.$store.commit('fetchRecords')
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    type HashTableValue = { title: string, item:RecordItem[]}
    const hashTable: { [key: string]: HashTableValue } = {};
    //声明这个hashTable的key是字符串，value是HashTableValue类型
    for (let i = 0; i < recordList.length; i++) {
      const date = recordList[i].createdAt!
      hashTable[date] = hashTable[date] || {title: date, item: []}
      hashTable[date].item.push(recordList[i])
    }
    console.log(hashTable);
    return hashTable;


  }
};
</script>

<style scoped lang="'scss">

</style>