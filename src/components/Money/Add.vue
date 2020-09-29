<template>
  <Layout>
    <div class="mainTitle" slot="header">制作新科目</div>
    <div slot="body">
      <Parts>
        <p slot="title">名字</p>
        <label slot="content">
          <a-input type="text" placeholder="请输入项目名"/>
        </label>
      </Parts>
      <div class="icon-area">
        <p slot="title">分类</p>
        <div class="scrollArea">
          <ul slot="content" class="tagList">
            <li v-for="tag in customTagList">
                <Icon :name="tag.name"></Icon>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Parts from "@/components/Money/Parts.vue";
import Categories from "@/components/Money/Categories.vue";
import customTagList from "@/constants/customTagList";
@Component({
  components: {Parts,Categories}
})
export default class Add extends Vue {
customTagList = customTagList
}
</script>

<style lang="scss" scoped>
.mainTitle{
  font-weight: bold;
  font-size: larger;
}
.icon-area{
  p {
    padding: 10px 20px;
    font-weight: bold;
  }
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
        height: 50px;
        width: 50px;
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