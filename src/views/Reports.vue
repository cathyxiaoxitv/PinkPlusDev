<template >
  <Layout>
    <Tabs slot="header" class-prefix="interval" :data-source="array1" :value.sync="interval"/>
    <div slot="body">
      <a-month-picker/>
      <div>
        <ol>
          <li v-for="item in result" :key="item.id">
            {{item}}
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



@Component({
  components: {Tabs}})
export default class Reports extends Vue{
  array1 = [{text:'月度报告',value:'monthly'},{text:'年度报告',value:'yearly'}]
  interval='monthly'
  beforeCreate(){
    this.$store.commit('fetchRecords')
  }
  get recordList(){
    return (this.$store.state as RootState).recordList;
  }
  get result(){
    const {recordList} =this;
    const hashTable:{[key:string]:RecordItem[]} = {};
    //声明这个hashTable的key是字符串，value是RecordItem数组
    for(let i =0;i<recordList.length;i++){
      const date = recordList[i].createdAt!
      hashTable[date] = hashTable[date] || []
      hashTable[date].push(recordList[i])
    }
    console.log(hashTable);
    return []

  }
};
</script>

<style scoped lang="'scss">

</style>