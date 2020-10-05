<template>
  <Layout>
    <div slot="header" class="mainTitle">
      <p>明细</p>
    </div>
    <div slot="body">
      <ChooseMonth @update:value = "month= $event"/>
        <ol v-if="Object.keys(result).length>0">
          <li v-for="(group,index) in result" :key="index">
            <h3 class="title">
              <span>{{group.title}}</span>
              <span
                  class="amount"
                  :class="{positive:showTotal(group).substring(0,1)==='+'}"
              >{{ showTotal(group)}}</span>
            </h3>
            <ol>
              <li v-for="item in group.item" :key="item.id"
                  class="detail"
              >
                <div class="icon-wrapper">
                  <Icon :name="item.category.svg" class="icon"></Icon>
                  <span class="tag">{{item.category.name}}</span>
                  <div class="notes">{{showNote(item)}}</div>
                </div>
                <div class="money-wrapper">
                  {{ showAmount(item) }}
                </div>
              </li>
            </ol>
          </li>
        </ol>
      <empty-data v-else/>
    </div>
  </Layout>
</template>

<script lang="ts">


import Vue from 'vue';
import moment from "moment";
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Money/Tabs.vue';
import ChooseMonth from "@/components/Calendar/ChooseMonth.vue";
import clone from "@/lib/clone";
import { RecordItem, RootState } from './custom';
import EmptyData from "@/components/Money/EmptyData.vue";


type HashTableValue = { title: string, item:RecordItem[]}
type hashTable = { [key: string]: HashTableValue }

@Component({
  components: {EmptyData, ChooseMonth, Tabs}
})
export default class Reports extends Vue {
  month = ''
  beforeCreate() {
    this.$store.commit('fetchRecords')
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    const totalTable: hashTable = {};
    //声明这个hashTable的key是字符串，value是HashTableValue类型
    const newList = clone(recordList).sort((a,b)=>moment(b.createdAt).valueOf()-moment(a.createdAt).valueOf())

    for (let i = 0; i < newList.length; i++) {
      const date = newList[i].createdAt!
      if(date.indexOf(this.month)> -1){
        totalTable[date] = totalTable[date] || {title: date, item: []}
        totalTable[date].item.push(newList[i])
      }
    }
    return totalTable
  }

  showTotal(group:HashTableValue){
    let total = 0
    let item:RecordItem
    for(item of group.item){
      if(item.type ==='expense') {
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
    if(item.type === 'income'){
      return '+'+commaAmount
    }else{
      return '-'+commaAmount
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.mainTitle{
  font-weight: bold;
  font-size: larger;
}
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
    color: $color-minus;
    &.positive{
      color:$color-plus
    }
  }

}
.detail{
  @extend %item;
  min-height: 45px;
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