<template>
  <Parts>
    <p slot="title">记录</p>
    <label slot="content">
      <a-input type="text"
             :value="value"
             :placeholder="placeholder"
             @input="onValueChanged"/>
    </label>
  </Parts>
</template>

<script lang="ts">
import Vue from 'vue';
import Parts from '@/components/Money/Parts.vue';
import {Component, Prop} from 'vue-property-decorator';

@Component({components:{Parts}})
export default class Notes extends Vue{
  @Prop({default:''})readonly value!:string;
  @Prop()placeholder?:string;
  onValueChanged(event:InputEvent){
    const input = (event.currentTarget as HTMLInputElement)
      const output = input.value;
      this.$emit('update:value',output)
  }
};
</script>

<style lang="scss" scoped>

</style>