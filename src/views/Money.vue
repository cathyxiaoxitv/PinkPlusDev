<template slot="header">

  <Layout>
    <Tabs slot="header"
          :data-source="recordTypeList"
          :value.sync="record.type" />
    <div slot="body" class="body">
      {{record}}
      <div class="parts-wrapper">
        <Date/>
        <Notes placeholder="在这里输入备注" :value.sync="record.notes"/>
        <Number
            :value.sync="record.amount"
            :type="record.type" />
        <Categories @update:value="record.category = $event"
                    :type="record.type"/>
      </div>
      <div class="-button-wrapper">
        <button @click="saveRecord">确定</button>
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
  record: RecordItem = {
    category: [], notes: '', type: '-', amount: 0
  };

  saveRecord() {
    this.$store.commit('createRecord', this.record);
    console.log(this.record.type);
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
  height: 85%;
  overflow: auto;
}
  .-button-wrapper {
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
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