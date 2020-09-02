<template>
  <Parts>
    <p slot="title">支出</p>
    <label slot="content">
      <input id="amount" class="inputBox" type="number" @input="onValueChanged" >
    </label>
  </Parts>
</template>

<script lang="ts">
import Vue from 'vue';
import Parts from '@/components/Money/Parts.vue';
import {Component,Prop} from 'vue-property-decorator';

@Component({components:{Parts}})
export default class Number extends Vue{
  @Prop() readonly  value!:number
  output = this.value.toString();
  onValueChanged(event:InputEvent){
    this.output = event.currentTarget.value;
    this.$emit('update:value',this.output)
  }

};
</script>

<style lang="scss" scoped>
.inputBox {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  height: 80%;
  border: none;
  border-radius: 5px;
  background: #FFEEED;
}

</style>