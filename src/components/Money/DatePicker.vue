<template>
  <Parts>
    <p slot="title">日期</p>
      <div slot="content">
        <a-date-picker placeholder="选择日期"
                       :defaultValue="moment(getCurrentDate(), 'YYYY-MM-DD')"
                        @change="selectDate"
        />
      </div>
  </Parts>
</template>

<script lang="ts">
import Vue from 'vue';
import moment, { Moment } from 'moment';
import {Component} from 'vue-property-decorator';
import Parts from '@/components/Money/Parts.vue';
import Icon from '@/components/Icon.vue';
@Component({
  components: {Icon, Parts}
})
export default class DatePicker extends Vue {
  moment = moment;

  getCurrentDate() {
    this.$emit('update:value',new Date().toISOString().substring(0,10))
    return new Date().toLocaleDateString();
  };

  selectDate(moment:Moment){
    const selectedDate = moment.format().substring(0,10);
    this.$emit('update:value',selectedDate)
  }


}</script>

<style lang="scss" scoped>
.ant-input{
  background: #FEF0EB;
  font-weight: bold;
  font-size: large;
}

</style>