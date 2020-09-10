import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);

const store= new Vuex.Store({
  state: {
    tagList: [{name:'饮食费',id:'1'},
      {name:'日用品',id:'2'},
      {name:'衣服',id:'3'},
      {name:'美容',id:'4'},
      {name:'交际费',id:'5'},
      {name:'医疗费',id:'6'},
      {name:'教育费',id:'7'},
      {name:'水电费',id:'8'},
      {name:'交通费',id:'9'},
      {name:'电话费',id:'10'},
      {name:'房费',id:'11'},
      {name:'编辑 >',id:'12'},
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