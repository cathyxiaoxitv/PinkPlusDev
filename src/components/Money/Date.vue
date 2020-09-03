<template>
  <Parts>
    <p slot="title">日期</p>
      <div slot="content">
        <a-date-picker @change="onChange" />
      </div>
  </Parts>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Parts from '@/components/Money/Parts.vue';
@Component({
  components: {Parts}
})
export default class Date extends Vue {
  onChange(){
    console.log('hi');
  }

}
</script>

<style lang="scss" scoped>

</style>