<template>
  <div>
      <p slot="title">分类</p>

    <ul slot="content" class="tagList">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag) >= 0}"
      @click="select(tag)">
        <div class="icon-wrapper">
          <Icon :name="icons"/>

        </div>
        {{tag.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">



import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import Parts from '@/components/Money/Parts.vue';
import Icon from '@/components/Icon.vue';

@Component({components:{Icon, Parts}})
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
p{
  padding:  10px 20px;
  font-weight: bold;
}
   .tagList {
     border: 1px solid pink;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > li {
      border: 1px solid lightgray;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 33.33%;
      margin: 10px 0;


      &.selected {
        background: #FF898D;
        color: white;
      }
    }

  }



</style>