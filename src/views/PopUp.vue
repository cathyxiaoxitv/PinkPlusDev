<template>
  <overlay
  animation="fade"
  :duration="duration"
  :show="show"
  @click="$emit('change',false)"
  >
    <transition
    name="fade" :duration="duration" appear
    >
      <div
          :style="{height:height}"
          class="center"
          v-show="show"
          @click.stop
      >
        <slot/>
      </div>
    </transition>
  </overlay>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Model, Prop} from 'vue-property-decorator';
import Overlay from "@/views/Overlay.vue";

@Component({
  components: {Overlay}
})
export default class PopUp extends Vue {
@Model('change',{type:Boolean,required:true}) readonly show!:boolean
  @Prop({default:300}) readonly duration!:number
  @Prop(String) readonly height?:string
}
</script>

<style lang="scss" scoped>
.center {
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>