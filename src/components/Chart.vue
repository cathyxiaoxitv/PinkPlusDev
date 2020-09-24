<template>
<div class="wrapper" ref="wrapper"></div>
</template>

<script lang="ts">

import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import Tabs from '@/components/Money/Tabs.vue';
import echarts, {EChartOption, ECharts} from 'echarts';

@Component({
  components: {Tabs,Vue}
})
export default class Chart extends Vue{
  @Prop() options?:EChartOption
  chart?:ECharts;
mounted(){
  if(this.options === undefined){
    return console.error('options 为空')
  }
  this.chart = echarts.init(this.$refs.wrapper as HTMLDivElement,'light')
  this.chart.setOption(this.options)
}
  @Watch('options')
  onOptionsChange(newValue:EChartOption){
    this.chart!.setOption(newValue)
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  height: 400px;
}
</style>