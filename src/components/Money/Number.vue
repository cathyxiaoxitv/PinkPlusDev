<template>
  <Parts>
    <p slot="title">支出</p>
    <label slot="content">
      <input class="inputBox" type="number" @change="onValueChanged" >
    </label>
  </Parts>
</template>

<script lang="ts">
import Vue from 'vue';
import Parts from '@/components/Money/Parts.vue';
import {Component} from 'vue-property-decorator';

@Component({components:{Parts}})
export default class Number extends Vue{
  onValueChanged(val:number){
    this.$emit('update:value',val)
    console.log(val);
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