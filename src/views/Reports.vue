<template>
  <Layout>
    <Tabs slot="header"
          :data-source="reportTypeList"
          :value.sync="report.value" />
    <div slot="body">
      <ChooseMonth/>
      <Chart :options="x"/>
    </div>
  </Layout>
</template>

<script lang="ts">


import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Money/Tabs.vue';
import Chart from '@/components/Chart.vue'
import reportTypeList from '@/constants/reportTypeList';
import ChooseMonth from "@/components/Calendar/ChooseMonth.vue";

@Component({
  components: {ChooseMonth, Tabs,Chart}})

export default class Reports extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  reportTypeList = reportTypeList;
  report: ReportItem = this.initReport();
  initReport(): ReportItem {
    return {text: '月度报告', value: 'month'}
  }
  get x(){
    return{
      xAxis:{
        type:'category',
        data:[
            '1','2','3','4','5','6','7', '8','9','10',
          '11','12','13','14','15','16','17', '18','19','20',
          '21','22','23','24','25','26','27', '28','29','30',
        ]
      },
      yAxis:{
        type: 'value'
      },
      series:[{
        data:[
            820,932,901,934,1290,435,1230,
          820,932,901,934,1290,435,1230,
          820,932,901,934,1290,435,1230,
          820,932,901,934,1290,435,1230,
            356,918
        ],
        type:'line'
      }],
      tooltip:{show:true}
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