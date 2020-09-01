<template>
  <Parts>
    <div slot="title" class="title">分类</div>
    <ul slot="content" class="tagList">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag) >= 0}"
      @click="select(tag)">
        {{tag.name}}
      </li>
    </ul>
  </Parts>

</template>

<script lang="ts">



import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import Parts from '@/components/Money/Parts.vue';

@Component({components:{Parts}})
export default class Categories extends Vue{
  selectedTags:string[] = []
  get tagList(){
    return this.$store.state.tagList;
  }
  select(tag:string){
    if(this.selectedTags ===[]){
      this.selectedTags.push(tag);
    }else{
      this.selectedTags = []
      this.selectedTags.push(tag);
    }
    this.$emit('update:value',this.selectedTags)
  }
};
</script>

<style lang="scss" scoped>
.parts {
  display: contents;

  > .title {
    padding: 15px;
  }

  > .tagList {
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    overflow-x: auto;

    > li {
      border: 1px solid lightgray;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 12px;
      width: 100px;
      height: 77px;

      &.selected {
        background: #FF898D;
        color: white;
      }
    }

  }
}


</style>