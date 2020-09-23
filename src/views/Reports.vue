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
      <Chart class="chart" :options="x"/>
    </div>
  </Layout>
</template>

<script lang="ts">


import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Money/Tabs.vue';
import Chart from '@/components/Chart.vue'
import reportTypeList from '@/constants/reportTypeList';
import recordTypeList from "@/constants/recordTypeList";
import ChooseMonth from "@/components/Calendar/ChooseMonth.vue";
import SimpleTab from "@/components/Reports/SimpleTab.vue";
import clone from "@/lib/clone";
import moment from "moment";
import _ from 'lodash'


type HashTableValue = { title: string, item: number[] }
type hashTable = { [key: string]: HashTableValue }
type CategoryArray = { name: string, value: number }

@Component({
  components: {ChooseMonth, Tabs, Chart, SimpleTab}
})
export default class Reports extends Vue {
  month = ''
  recordTypeList = recordTypeList;
  reportTypeList = reportTypeList;
  record: RecordItem = this.initRecord();
  report: ReportItem = this.initReport();

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

  get categoryList() {
    let clonedList = clone(this.recordList).map(r => _.pick(r, ['createdAt', 'amount', 'category', 'type']));
    let thisMonthList = []
    for (let i = 0; i < clonedList.length; i++) {
      if (clonedList[i].createdAt!.indexOf(this.month) > -1 &&
          clonedList[i].category.type === this.record.type) {
        thisMonthList.push(clonedList[i])
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

  get x() {
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
        left: 'left',
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

.chart {
}
</style>