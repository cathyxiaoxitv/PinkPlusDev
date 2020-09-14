<template>
  <Parts>
    <p slot="title" v-if="type === '-'">支出</p>
    <p slot="title" v-else>收入</p>
    <label slot="content">
      <a-input type="text"
               pattern="\d*"
               onfocus="if(value==='0'){value=''}"
               onblur="if(value===''){value='0'}"
               v-model="price"
      />

    </label>
  </Parts>
</template>

<script lang="ts">
import Vue from 'vue';

import Parts from '@/components/Money/Parts.vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components: {Icon, Parts},
})


export default class Number extends Vue {
  @Prop() type!: string


  get recordTypeList() {
    return this.$store.state.recordTypeList;
  }
  price:string = '0';
  @Watch('price')
    valueChange(newValue:string){
    const result = newValue.replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.$nextTick(function(){this.price = result})
    const number = parseFloat(result.replace(/,/g, ''));
    this.$emit('update:amount',number)
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