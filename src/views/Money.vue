<template slot="header">

  <Layout>
    <Tabs slot="header"
          :data-source="recordTypeList"
          :value.sync="record.type" />

    <div slot="body" class="body">
      <div class="parts-wrapper">
        <DatePicker @update:value = "record.createdAt = $event"/>
        <Notes placeholder="在这里输入备注" :value.sync="record.notes"/>
        <Number
            :value.sync="record.amount"
            :type="record.type" />
        <Categories :type="record.type"
                    :selectedTag.sync="record.category"
        />
      </div>
      <div class="-button-wrapper">
        <a-button @click='confirm'>确定</a-button>
      </div>
    </div>
  </Layout>


</template>

<script lang="ts">

import Vue from 'vue';
import Notes from '@/components/Money/Notes.vue';
import Number from '@/components/Money/Number.vue';
import Tabs from '@/components/Money/Tabs.vue';
import {Component} from 'vue-property-decorator';
import Parts from '@/components/Money/Parts.vue';
import Categories from '@/components/Money/Categories.vue';
import recordTypeList from '@/constants/recordTypeList';
import DatePicker from '@/components/Money/DatePicker.vue';
import { RecordItem } from './custom';

@Component({
  components: {DatePicker, Categories, Number, Notes, Parts, Tabs}
})

export default class Money extends Vue {
  recordTypeList = recordTypeList;
  record: RecordItem = this.initRecord();

  initRecord(): RecordItem {
    return {category: {id:'',name: '饮食费', type: 'expense',svg:'饮食费'}, notes: '', type: 'expense', amount: 0, createdAt: ''};
  }

  confirm() {
    const _this= this;
    if (this.record.amount === 0) {
      this.$confirm({
        content: '金额为0，确定吗？',
        okText: '确定',
        cancelText: "取消",
        centered:true,
        onOk(){
          _this.$store.commit('createRecord',_this.record)
          _this.$message.success({content: '已保存',duration:1});
        }
      })
    } else {
      this.$store.commit('createRecord', this.record);
        this.$message.success({content: '已保存',duration:1});
    }
    this.record.notes = ''
    this.record.amount = 0
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.body{
  height: 100%;
  //::-webkit-scrollbar{
  //  display: none;
  //}
.parts-wrapper{
  height: 70%;
  overflow: auto;
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



}

</style>