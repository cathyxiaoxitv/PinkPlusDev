import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);

const store= new Vuex.Store({
  state: {
    tagList: [{name:'饮食费',id:'1'},
      {name:'电话费',id:'2'},
      {name:'房费',id:'3'},
      {name:'编辑>',id:'4'},
      ],
    recordList:[]
  } as RootState,
  mutations: {
    fetchRecords(state){
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state,record){
      const clonedRecord: RecordItem = clone(record);
      console.log(record);
      clonedRecord.createdAt = new Date().toISOString();
      state.recordList.push(clonedRecord);
      store.commit('saveRecords');
    },
    saveRecords(state){
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList))
    }
  },
  actions: {},
  modules: {}
});

export default store;