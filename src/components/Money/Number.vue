<template>
  <Parts>
    <p slot="title" v-if="type === '-'">支出</p>
    <p slot="title" v-else>收入</p>
    <label slot="content" >
      <a-input value="0" @input="onValueChanged"/>
    </label>
  </Parts>
</template>

<script lang="ts">
import Vue from 'vue';
import Parts from '@/components/Money/Parts.vue';
import {Component,Prop} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({components:{Icon, Parts}})
export default class Number extends Vue{
  @Prop() type!:string
  @Prop() readonly  value!:number

  output = this.value.toString();
  get recordTypeList(){
    return this.$store.state.recordTypeList;
  }
  onValueChanged(event:InputEvent){
    this.output = event.currentTarget.value;
    this.$emit('update:value',this.output)
  }

};
</script>

<style lang="scss" scoped>
.ant-input{
  background: #FEF0EB;
  font-weight: bold;
  font-size: large;
}

</style>