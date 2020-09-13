<template>
  <Parts>
    <p slot="title" v-if="type === '-'">支出</p>
    <p slot="title" v-else>收入</p>
    <label slot="content">
      <a-input type="number" pattern="\d*"
               onfocus="if(value==='0'){value=''}"
               onblur="if(value===''){value='0'}"
               v-model="inputNum"
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
  @Prop() readonly value!: number
  inputNum = this.value.toString();

  get recordTypeList() {
    return this.$store.state.recordTypeList;
  }
  @Watch('inputNum')
addComma(){
    this.$emit('update:value',parseInt(this.inputNum))
    // console.log(event);
    // this.inputNum = event.replace(/(?=(\B\d{3})+$)/g, ',')
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