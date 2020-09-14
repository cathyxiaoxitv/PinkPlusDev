<template slot="header">

  <Layout>
    <Tabs slot="header"
          :data-source="recordTypeList"
          :value.sync="record.type" />
    <div slot="body" class="body">
      <div class="parts-wrapper">
        <Date @update:value = "record.createdAt = $event"/>
        <Notes placeholder="在这里输入备注" :value.sync="record.notes"/>
        <Number
            :amount.sync="record.amount"
            :type="record.type" />
        <Categories :type="record.type"
                    :selectedTag.sync="record.category"
        />
      </div>
      <div class="-button-wrapper">
        <button @click="saveRecord" >确定</button>
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
import Date from '@/components/Money/DatePicker.vue';

@Component({
  components: {Date, Categories, Number, Notes, Parts, Tabs}
})

export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;
  record: RecordItem = this.initRecord();

  initRecord():RecordItem{
    return {category: {name: '饮食费', type: '-'}, notes: '', type: '-', amount: 0,createdAt:''};
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record);
    console.log(this.record.type);
    window.alert('已保存')
  }
};
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