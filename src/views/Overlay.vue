<template>
<transition
 :name="animation"
 appear
 :duration="duration"
>
  <div @click="onClick" class="overlay" v-show="show">
    <slot/>
  </div>
</transition>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Overlay extends Vue  {
  @Prop({default:false,type:Boolean}) readonly show!:boolean
  @Prop({default:0,type:Number}) readonly  duration!:number
  @Prop({default:'body',type:String}) readonly  container!:string
  @Prop(String) readonly animation!:string

  onClick(e:Event){
    this.$emit('click',e)
  }


}
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  transform: translateZ(0);
}
</style>