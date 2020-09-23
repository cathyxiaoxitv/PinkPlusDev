<template>
  <div>
    <ul class="tabs" :class="{[classPrefix + '-tabs']:classPrefix}">
      <li v-for="item in dataSource" :key="item.value"
          class="tabs-item"
          :class="liClass(item)"
          @click="select(item)"
      >{{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string, value: string }

@Component
export default class SimpleTab extends Vue {
  @Prop({required: true, type: Array})
  dataSource!: DataSourceItem[];
  @Prop(String)
  readonly value!: string;
  @Prop(String)
  classPrefix?: string;

  liClass(item: DataSourceItem) {
    return {
      selected: item.value === this.value,
      [this.classPrefix + '-tabs-item']: this.classPrefix
    };
  }

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tabs {
  margin:10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > li {
    width: 125px;
    padding: 3px 35px;
    font-weight: bold;
    color: lightgray;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;

    &.selected {
      color: $color-highlight;
      border-bottom: 1px solid $color-highlight;
    }
  }
}
</style>