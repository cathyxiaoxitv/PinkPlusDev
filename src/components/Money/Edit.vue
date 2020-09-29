<template>
<Layout>
  <Tabs slot="header"
        :data-source="recordTypeList"
        :value.sync="type"
  />

  <div slot="body">
    {{type}}
    <ol>
      <li v-for="tag in filteredList">
        <Icon :name="tag.name"></Icon>
        {{ tag.name }}
      </li>
    </ol>
  </div>
</Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tabs from "@/components/Money/Tabs.vue";
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';


@Component({
  components: {Tabs}
})
export default class Edit extends Vue  {
  type = '-'
  recordTypeList = recordTypeList;
  // record: RecordItem = this.initRecord();
  //
  // initRecord(): RecordItem {
  //   return {category: {name: '饮食费', type: '-'}, notes: '', type: '-', amount: 0, createdAt: ''};
  // }
  get filteredList() {
    return this.$store.state.tagList.filter((tag: Tag) => tag.type === this.type)
  }
}
</script>

<style lang="scss" scoped>

</style>