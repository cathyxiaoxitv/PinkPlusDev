<template>
  <Layout>
    <Tabs slot="header" class-prefix="interval" :data-source="array1" :value.sync="interval"/>
    <div slot="body">
    </div>
  </Layout>
</template>

<script lang="ts">


import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Money/Tabs.vue';



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
    const hashTable: { [key: string]: HashTableValue } = {};
    //声明这个hashTable的key是字符串，value是HashTableValue类型
    for (let i = 0; i < recordList.length; i++) {
      const date = recordList[i].createdAt!
      hashTable[date] = hashTable[date] || {title: date, item: []}
      hashTable[date].item.push(recordList[i])
    }
    return hashTable;
  }
showTotal(group:HashTableValue){
    let total = 0
    let item:RecordItem
  for(item of group.item){
    if(item.type ==='-'){
      total -= item.amount
    }
    else{
      total += item.amount
    }
  }
  if(total>0){
    return '+'+this.addComma(total)
  }else if(total<0){
    return '-'+this.addComma(total)
  }else{
    return '0'
  }
}
addComma(amount:number){
  return amount.toString().replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
showNote(item:RecordItem){
    if(item.notes!==''){
      return '('+item.notes+')'
    }
}
  showAmount(item:RecordItem){
    let commaAmount = this.addComma(item.amount)
    if(item.type === '+'){
      return '+'+commaAmount
    }else{
      return '-'+commaAmount
    }
  }
};
</script>

<style scoped lang="scss">
%item{
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
}

.title {
  @extend %item;
  min-height: 20px;
  background: #F4F5F6;
  .amount{
    color: red;
    &.positive{
      color:green
    }
  }

}
.record{
  @extend %item;
  min-height: 30px;
  align-items: center;

  .money-wrapper{
    font-size: x-small;
  }

  .icon-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    .icon{
      padding: 5px;
      margin-right:5px;
      width: 35px;
      height:35px;
    }
    .tag{
      font-weight: bold;
    }
    .notes{
      margin: 0 5px;
      color: gray;
      font-size: x-small;
      display: flex;
      flex-wrap: wrap;
    }
  }

}

</style>