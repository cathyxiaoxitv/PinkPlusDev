<template>
  <Parts>
    <p slot="title">名字</p>
    <label slot="content">
      <a-input
               type="text" placeholder="请输入标签名"
               :value="name"
               @input="$emit('change',$event.target.value)"
      />
    </label>
  </Parts>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Model} from 'vue-property-decorator';
import Parts from "@/components/Money/Parts.vue";
@Component({
  components: {Parts}
})
export default class CategoryInfo extends Vue {
@Model('change',{required:true,type:String}) readonly name!:string
}
</script>

<style lang="scss" scoped>

</style>