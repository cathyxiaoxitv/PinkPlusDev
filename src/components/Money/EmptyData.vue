<template>
  <a-empty v-else :image="simpleImage"
           :image-style="{
      height: '30px',
    }"
  >
    <span slot="description">暂无数据</span>
    <a-button type="primary" @click="newRecord">
      记一笔
    </a-button>
  </a-empty>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Empty} from "ant-design-vue";

@Component
export default class EmptyData extends Vue  {
    simpleImage: any;
  beforeCreate() {
    this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
    this.$store.commit('fetchRecords')
  }
  newRecord(){
    this.$router.push('/money')
  }
}
</script>

<style lang="scss" scoped>

</style>