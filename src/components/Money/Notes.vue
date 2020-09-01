<template>
  <Parts>
    <p slot="title">记录</p>
    <label slot="content">
      <input type="text" placeholder="未输入" @change="onValueChanged">
    </label>
  </Parts>
</template>

<script lang="ts">
import Vue from 'vue';
import Parts from '@/components/Money/Parts.vue';
import {Component, Watch} from 'vue-property-decorator'

@Component({components:{Parts}})
export default class Notes extends Vue{
  value = '';
  @Watch('value')
  onValueChanged(val: string) {
    this.$emit('update:value', val)
    console.log(val);
  }
};
</script>

<style lang="scss" scoped>
  input {
    border: none;
  }

</style>