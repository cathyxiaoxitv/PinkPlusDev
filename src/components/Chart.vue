<template>
<div class="wrapper" ref="wrapper"></div>
</template>

<script lang="ts">

import {Component,Prop,Vue} from 'vue-property-decorator';
import Tabs from '@/components/Money/Tabs.vue';
import echarts, {EChartOption} from 'echarts';

@Component({
  components: {Tabs,Vue}
})
export default class Chart extends Vue{
  @Prop() options?:EChartOption
mounted(){
  if(this.options === undefined){
    return console.error('options 为空')
  }
  const chart = echarts.init(this.$refs.wrapper as HTMLDivElement,'light')
  chart.setOption(this.options)
}}
</script>

<style lang="scss" scoped>
.wrapper{
  height: 400px;
}
</style>