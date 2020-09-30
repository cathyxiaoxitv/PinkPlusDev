<template>
  <Layout>
    <div class="mainTitle" slot="header">制作新科目</div>
    <div slot="body">
      <Parts>
        <p slot="title">名字</p>
        <label slot="content">
          <a-input type="text" placeholder="请输入项目名"
                   @input="onValueChanged"
          />
        </label>
      </Parts>
      <custom-icon :selected-tag.sync="newTag.svg"/>

      <div class="-button-wrapper">
        <a-button @click="save">确定</a-button>
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
import Icon from "@/components/Icon.vue";
import CustomIcon from "@/components/Money/customIcon.vue";
import {Tag} from "@/views/custom";
@Component({
  components: {CustomIcon, Icon, Parts,Categories}
})
export default class Add extends Vue {
  customTagList = customTagList
  newTag:Tag = {name:'',svg:'note',type:''}
  created(){
    this.newTag.type = this.$route.params.type;
  }
save(){
    this.$store.commit('createTag',this.newTag)
}
  onValueChanged(event:InputEvent){
    const input = (event.currentTarget as HTMLInputElement)
    this.newTag.name = input.value;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
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
.-button-wrapper {
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
    width: 80%;
    background: $color-highlight;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    color: white;
    font-weight: bold;
    border-radius: 20px;
  }
}

</style>