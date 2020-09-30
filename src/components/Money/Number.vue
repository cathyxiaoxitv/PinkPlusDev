<template>
  <Parts>
    <p slot="title" v-if="type === 'expense'">支出</p>
    <p slot="title" v-else>收入</p>
    <label slot="content">
      <a-input type="text"
               pattern="\d*"
               onfocus="if(value==='0'){value=''}"
               onblur="if(value===''){value='0'}"
               :value="commaAmount"
               @input="onValueChanged"
      />
    </label>
  </Parts>
</template>

<script lang="ts">
import Vue from 'vue';

import Parts from '@/components/Money/Parts.vue';
import {Component, Prop} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components: {Icon, Parts},
})


export default class Number extends Vue {
  @Prop() type!: string
  @Prop() value!: number
  
  get commaAmount(){
    return this.value.toString().replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  onValueChanged(event:InputEvent){
    const input = (event.currentTarget as HTMLInputElement)
    const output = parseFloat(input.value.replace(/,/g, ''));
    this.$emit('update:value',output)
  }
};
</script>

<style lang="scss" scoped>
.ant-input {
  background: #FEF0EB;
  font-weight: bold;
  font-size: large;
}


</style>