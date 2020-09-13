<template>
  <div>
    <p slot="title">分类</p>
    <div class="scrollArea">
    <ul slot="content" class="tagList">
      <li v-for="(tag,index) in filteredList" :key="index"

          >
        <div class="icon-wrapper"
             :class="{selected:activeIndex === index || selectedTags.indexOf(tag)>=0 } "
             @click="select(tag)">
        <div class="svg-wrapper">
          <Icon :name="tag.name"></Icon>
        </div>
        {{ tag.name }}
        </div>
      </li>
    </ul>
    </div>
  </div>
</template>

<script lang="ts">


import {Component, Prop, Watch} from 'vue-property-decorator';
import Vue from 'vue';
import Parts from '@/components/Money/Parts.vue';
import Icon from '@/components/Icon.vue';

@Component({components: {Icon, Parts}})
export default class Categories extends Vue {
  selectedTags:string[]=[];
  activeIndex:number = 0;
  @Prop() type!:string
//better 重复

  send(index:number){
    return this.$emit('update:value',[this.$store.state.tagList[index]])
  }
  created(){
    if(this.type === "+"){
      this.send(11)
    }
    else{
      this.send(0)
    }  }
  @Watch('type')
  updateCategory(){
    if(this.type === "+"){
      this.send(11)
    }
    else{
      this.send(0)
    }
  }
  get filteredList() {
    return this.$store.state.tagList.filter((tag:Tag) =>tag.type === this.type )
  }
  select(tag:string) {
    if(this.selectedTags.length !== 0){
      this.selectedTags = [];
    }
    this.selectedTags.push(tag);
    console.log(this.selectedTags);
    this.$emit('update:value',this.selectedTags)
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
p {
  padding: 10px 20px;
  font-weight: bold;
}
.scrollArea{
  height: 30vh;
  overflow: auto;

  .tagList {
    padding: 0 10px;
    //border: 1px solid green;
    display: flex;
    flex-wrap: wrap;
    align-items:start;

    > li {
      //border: 1px solid blue;
      width: 33.333%;
      height: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon-wrapper{
        border: 1px solid lightgray;
        margin-bottom: 10px;
        border-radius: 5px;
        width: 80%;
        height: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &.selected {
          box-shadow: 0 0 2px lightgray;
          background: #FEF0EB;
          svg {
            animation: shake 0.3s linear;
          }
        }
      }
      svg {
        margin: 8px;
        height: 40px;
        width: 40px;
      }
      @keyframes shake {
        0% {
          transform: rotate(0deg);
        }
        20% {
          transform: rotate(20deg);
        }
        40% {
          transform: rotate(0deg);
        }
        80%{
          transform: rotate(-20deg);
        }
        100% {
          transform:rotate(0deg);
        }
      }
    }
  }
}



</style>