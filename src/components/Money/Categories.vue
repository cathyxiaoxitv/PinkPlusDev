<template>
  <div>
    <p slot="title">分类</p>

    <ul slot="content" class="tagList">
      <li v-for="tag in filteredList" :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag) >= 0}"
          @click="select(tag)">
        <div class="icon-wrapper">
          <Icon :name="tag.name"></Icon>
        </div>
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">


import {Component, Prop} from 'vue-property-decorator';
import Vue from 'vue';
import Parts from '@/components/Money/Parts.vue';
import Icon from '@/components/Icon.vue';

@Component({components: {Icon, Parts}})
export default class Categories extends Vue {
  selectedTags: string[] = [];
  @Prop() type!:string

  get filteredList() {
    return this.$store.state.tagList.filter((tag:Tag) =>tag.type === this.type )
  }

  select(tag: string) {
    if (this.selectedTags === []) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = [];
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);

  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
p {
  padding: 10px 20px;
  font-weight: bold;
}

.tagList {
  height:50vh;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 0 10px;

  > li {
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      margin: 8px;
      height: 30px;
      width: 30px;
    }

    &.selected {
      box-shadow: 0 0 2px lightgray;
      background: #FEF0EB;

      svg {
        animation: shake 0.3s linear;
      }
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


</style>