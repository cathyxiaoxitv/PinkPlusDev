<template>
  <div>
    <a-month-picker placeholder="选择月份"
                    @change="onChange"
                    :defaultValue="moment(getCurrentDate(),'YYYY-MM')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment'
import {Component} from 'vue-property-decorator';

@Component
export default class ChooseMonth extends Vue {
  moment = moment;
onChange(date:object,dateString:string){
  this.$emit('update:value',dateString)
}
  getCurrentDate() {
    const thisMonth = new Date().toISOString().substring(0,7)
    this.$emit('update:value',thisMonth)
    return new Date().toLocaleDateString();
  };


}
</script>

<style lang="scss" scoped>

</style>