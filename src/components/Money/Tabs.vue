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
export default class Tabs extends Vue {
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
  background: #F8F8F8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > li {
    border-radius: 5px;
    padding: 3px 35px;
    font-weight: bold;
    color: $color-highlight;
    background: #E8E8E9;

    &.selected {
      background: $color-highlight;
      color: white;
    }
  }
}
</style>