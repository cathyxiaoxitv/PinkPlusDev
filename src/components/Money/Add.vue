<template>
  <Layout>
    <div class="mainTitle" slot="header">{{ moneyType }}新标签</div>

    <div slot="body">
      <category-info v-model="categoryName"/>
      <icon-list v-model="categoryIcon"/>
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
import Icon from "@/components/Icon.vue";
import CustomIcon from "@/components/Money/IconList.vue";
import {moneyType} from "@/views/custom";
import IconList from "@/components/Money/IconList.vue";
import CATEGORY_ICON_NAMES from "@/constants/customTagList";
import CategoryInfo from "@/components/Money/CategoryInfo.vue";


@Component({
  components: {CategoryInfo, IconList, CustomIcon, Icon, Parts, Categories}
})
export default class Add extends Vue {
  iconList = CATEGORY_ICON_NAMES
  categoryIcon = CATEGORY_ICON_NAMES[0]
  categoryName = ''

  get tagList() {
    return this.$store.commit('fetchTags');
  }

  get moneyType() {
    const map = {
      'expense': '支出',
      'income': '收入'
    }
    return map[this.$route.params.type as moneyType]
  }

  save() {
    this.$store.commit('fetchTags')
    const names = this.$store.state.tagList.map((tag: { name: any; }) => tag.name)
    if (this.categoryName.length === 0) {
      this.$warning({
        centered: true,
        title: '标签名不能为空',
        content: '请输入标签名'
      })
    } else if (names.indexOf(this.categoryName) >= 0) {
      this.$warning({
        centered: true,
        title: '标签名重复了',
        content: '请重新输入'
      })
      this.categoryName = ''
    } else {
      this.$store.commit('createTag', {
        svg: this.categoryIcon,
        type: this.$route.params.type as moneyType,
        name: this.categoryName
      })
      this.$message.success({content: '已保存', duration: 1});
      this.categoryName = ''
    }

  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.mainTitle {
  font-weight: bold;
  font-size: larger;
}

.icon-area {
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
    height: 40px;
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