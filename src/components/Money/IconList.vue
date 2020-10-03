<template>
  <div>
    <p slot="title">图标</p>
    <div class="scrollArea">
      <ul slot="content" class="tagList">
        <li v-for="svg in iconList" :key="svg"
            @click="$emit('change',svg)"
        >
          <div :class="highlight(svg)">
            <Icon :name="svg"></Icon>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Model} from 'vue-property-decorator';
import Vue from 'vue';
import Parts from '@/components/Money/Parts.vue';
import Icon from '@/components/Icon.vue';
import CATEGORY_ICON_NAMES from "@/constants/customTagList";

@Component({components: {Icon, Parts}})
export default class IconList extends Vue {
  @Model('change', {required: true, type: String}) readonly icon!: string
  iconList = CATEGORY_ICON_NAMES

  highlight(svg: string) {
    return {
      'icon-wrapper':true,
      'selected': this.icon === svg
    }
  }


};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

p {
  padding: 10px 20px;
  font-weight: bold;
}

.scrollArea {
  height: 30vh;
  overflow: auto;

  .tagList {
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: start;

    > li {
      width: 33.333%;
      height: 20%;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon-wrapper {
        border: 1px solid lightgray;
        margin-bottom: 10px;
        border-radius: 10px;
        width: 80%;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &.selected {
          box-shadow: 1px 2px 2px lightgray;
          background: #FEF0EB;

          svg {
            animation: shake 0.3s linear;
          }
        }
      }

      svg {
        margin-top: 2px;
        height: 30px;
        width: 30px;
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
        80% {
          transform: rotate(-20deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    }
  }
}


</style>