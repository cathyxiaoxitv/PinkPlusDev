<template>
  <a-empty v-else
           :image-style="{
      height: '60px',
    }"
  >
    <span slot="description" style="color: lightgrey">暂无数据</span>
    <a-button type="primary" @click="newRecord">
      记一笔
    </a-button>
  </a-empty>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class EmptyData extends Vue  {
    simpleImage: any;
  beforeCreate() {
    this.$store.commit('fetchRecords')
  }
  newRecord(){
    this.$router.push('/money')
  }
}
</script>

<style lang="scss" scoped>
</style>