<template>
  <Layout>
    <Tabs slot="header"
          :data-source="reportTypeList"
          :value.sync="report.value"/>

    <div slot="body">
      <ChooseMonth @update:value="month= $event"/>

      <SimpleTab
          :data-source="recordTypeList"
          :value.sync="record.type"/>
      {{this.expense}}
      {{this.income}}
      <ul class="upper-wrapper">
        <li :class="{red:this.expense>0}" @click="record.type ='-'">-{{this.expense|addComma}}</li>
        <li :class="{green:this.income>0}" @click="record.type ='+'">+{{this.income|addComma}}</li>
      </ul>
      <div class="down-wrapper">
        <span
            @click="comment"
            :class="{green:this.income>this.expense,red:this.expense>this.income}">共计: {{this.income-this.expense|addComma}}</span >
      </div>
      <Chart v-if="categoryList.length>0" class="chart" :options="chartOptions"/>
      <div v-else class="notification">暂无数据</div>
    </div>
  </Layout>
</template>

<script lang="ts">


import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Tabs from '@/components/Money/Tabs.vue';
import Chart from '@/components/Chart.vue'
import reportTypeList from '@/constants/reportTypeList';
import recordTypeList from "@/constants/recordTypeList";
import ChooseMonth from "@/components/Calendar/ChooseMonth.vue";
import SimpleTab from "@/components/Reports/SimpleTab.vue";
import clone from "@/lib/clone";
import _ from 'lodash'


type HashTableValue = { title: string, item: number[] }
type hashTable = { [key: string]: HashTableValue }
type CategoryArray = { name: string, value: number }

@Component({
  components: {ChooseMonth, Tabs, Chart, SimpleTab},
  filters:{
    addComma(amount:number){
      if(!amount){return}
      return amount.toLocaleString()
    }
  }
})
export default class Reports extends Vue {
  month = ''
  expense = 0
  income = 0
  recordTypeList = recordTypeList;
  reportTypeList = reportTypeList;
  record: RecordItem = this.initRecord();
  report: ReportItem = this.initReport();
   clonedList = clone(this.recordList).map(r => _.pick(r, ['createdAt', 'amount', 'category', 'type']));
   @Watch('month')
  updateBalance() {
     let thisMonthList = []
     for (let i = 0; i < this.clonedList.length; i++) {
       if (this.clonedList[i].createdAt!.indexOf(this.month) > -1)
       {
         thisMonthList.push(this.clonedList[i])
       }
     }
  const totalMap = new Map()
  for (let i = 0; i < thisMonthList.length; i++) {
    const type: string = thisMonthList[i].type;
    const value: number = thisMonthList[i].amount
    if (totalMap.has(type)) {
      const prevValue = totalMap.get(type)
      const currentValue = prevValue + value;
      totalMap.set(type, currentValue)
    } else {
      totalMap.set(type, value);
    }
  }
     if(totalMap.get('+')){
       this.income = totalMap.get('+')
     }else{
       this.income = 0
     }
     if(totalMap.get('-')){
       this.expense = totalMap.get('-')
     }else{
       this.expense = 0
     }
     return this.expense & this.income
}
  beforeCreate() {
    this.$store.commit('fetchRecords')
  }

  initRecord(): RecordItem {
    return {category: {name: '饮食费', type: '-'}, notes: '', type: '-', amount: 0, createdAt: ''};
  }

  initReport(): ReportItem {
    return {text: '月度报告', value: 'month'}
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
comment() {
  if (this.income - this.expense > 0) {
    this.$success({
      centered:true,
      title: '攒钱高手',
      content: '这个月会发财哦👏'
    })
  } else if ((this.income) && (this.income - this.expense <= 0)) {
    this.$success({
      centered:true,
      title: '入不敷出',
      content: '注意收支平衡哦！'
    })
  }
}

  get categoryList() {
    let thisMonthList = []
    for (let i = 0; i < this.clonedList.length; i++) {
      if (this.clonedList[i].createdAt!.indexOf(this.month) > -1
          && this.clonedList[i].category.type === this.record.type)
      {
        thisMonthList.push(this.clonedList[i])
      }
    }

    const map = new Map()
    for (let i = 0; i < thisMonthList.length; i++) {
      const category: string = thisMonthList[i].category.name;
      const value: number = thisMonthList[i].amount;
      if (map.has(category)) {
        const prevValue = map.get(category);
        const currentValue = prevValue + value;
        map.set(category, currentValue);
      } else {
        map.set(category, value);
      }
    }
    return [...map];
  }

  get chartOptions() {
    const tags = this.categoryList.map(item => item[0])
    const chartData = this.categoryList.reduce((result, item) => {
          result.push({'name': item[0] as string, 'value': item[1] as number})
          return result;
        },
        [] as CategoryArray[])
    return {
      color: ['rgb(254,67,101)', 'rgb(252,157,154)', 'rgb(249,205,173)', 'rgb(200,200,169)', 'rgb(131,175,155)'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 10,
        top:10,

        data: tags
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: chartData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }

}
</script>

<style scoped lang="scss">
%item {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
}
%amount{
  height: 50px;
  display: block;
  text-align: center;
  line-height: 50px;
  width: 120px;
  font-weight: bold;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 1px 2px 2px lightgray;
  margin: 5px;
  color: lightgray;

  &.red{
    color: red;
  }
  &.green{
    color: green;
  }
}
.title {
  @extend %item;
  min-height: 20px;
  background: #F4F5F6;

  .amount {
    color: red;

    &.positive {
      color: green
    }
  }

}

.record {
  @extend %item;
  min-height: 30px;
  align-items: center;

  .money-wrapper {
    font-size: x-small;
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      padding: 5px;
      margin-right: 5px;
      width: 35px;
      height: 35px;
    }

    .tag {
      font-weight: bold;
    }

    .notes {
      margin: 0 5px;
      color: gray;
      font-size: x-small;
      display: flex;
      flex-wrap: wrap;
    }
  }

}

.upper-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  :hover{
    cursor: pointer;
  }

  li{
   @extend %amount;
  }
}
.down-wrapper{
  span {
    @extend %amount;
  }
  display: flex;
  justify-content: center;


}
.notification {
  font-weight: bold;
  color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

}
</style>