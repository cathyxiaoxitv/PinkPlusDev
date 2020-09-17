<template>
  <Layout>
    <Tabs slot="header" class-prefix="interval" :data-source="array1" :value.sync="interval"/>
    <div slot="body">
      <div>
        <ol>
          <li v-for="(group,index) in result" :key="index">
            <h3 class="title">{{ group.title}}</h3>
            <ol>
              <li v-for="item in group.item" :key="item.id" class="record">
                <div class="icon-wrapper">
                  <Icon :name="item.category.name" class="icon"></Icon>
                  <span class="tag">{{item.category.name}}</span>
                  <div class="notes">({{item.notes}})</div>
                </div>
                <div class="money-wrapper"
                     :class="{plus:item.type === '+'}">
                  {{addComma(item.amount.toString())}}
                </div>
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

  addComma(amount:string){
    return amount.replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
</script>

<style scoped lang="scss">
%item{
  padding: 0 10px;
  //border-bottom: 1px solid lightgray;
}

.title {
  @extend %item;
  min-height: 20px;
  background: #F4F5F6;
}
.record{
  border: 1px solid green;
  min-height: 30px;
  @extend %item;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  .money-wrapper{
    border: 1px solid red;
    color: red;
    &.plus{
      color: green;
    }

  }

  .icon-wrapper{
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon{
      margin: 0 5px;
      border: 1px solid green;
      width: 30px;
      height:30px;
    }
    .tag{
      border: 1px solid pink;
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