<template>
  <Layout>
    <Tabs slot="header"
          :data-source="recordTypeList"
          :value.sync="type"
    />

    <div slot="body">
      <div class="detail" @click="addTag">
        <span class="add">追加新的标签</span>
        <span>></span>
      </div>
      <ol>
        <li v-for="tag in filteredList"
            class="detail">
          <div class="icon-wrapper">
            <Icon :name="tag.svg" class="icon"></Icon>
            <span class="tag">{{ tag.name }}</span>
          </div>
          <div @click="deleteTag(tag)">
            <Icon name="delete"
            ></Icon>
          </div>
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
import { Tag } from '@/views/custom';


@Component({
  components: {Tabs}
})
export default class Edit extends Vue {
  type = 'expense'
  recordTypeList = recordTypeList;

  get filteredList() {
    this.$store.commit('fetchTags')
    return this.$store.state.tagList.filter((tag: Tag) => tag.type === this.type)
  }
addTag(){
    this.$router.push(`/money/edit/add/${this.type}`)
}
  deleteTag(tag: Tag) {
    const _this= this;
    this.$confirm({
      content: '确定要删除该标签吗?',
      okText: '确定',
      cancelText: "取消",
      centered:true,
      onOk(){
        _this.$store.commit('deleteTag', tag)
        _this.$message.success({content: '已删除',duration:1});
      }
    })


  }
}
</script>

<style lang="scss" scoped>
%item {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
}

.detail {
  @extend %item;
  min-height: 45px;
  align-items: center;
}

.add {
  padding-left: 5px;
}

.icon-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    padding: 5px;
    margin-right: 5px;
    width: 35px;
    height: 35px;
  }

  .notes {
    margin: 0 5px;
    color: gray;
    font-size: x-small;
    display: flex;
    flex-wrap: wrap;
  }
}

.delete {
  width: 20px;
  height: 20px;
  border: 1px solid red;
}
</style>