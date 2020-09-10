import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);

const store= new Vuex.Store({
  state: {
    tagList: [{name:'饮食费',id:'1',type:'+'},
      {name:'日用品',id:'2',type:'+'},
      {name:'衣服',id:'3',type:'+'},
      {name:'美容',id:'4',type:'+'},
      {name:'交际费',id:'5',type:'+'},
      {name:'医疗费',id:'6',type:'+'},
      {name:'教育费',id:'7',type:'+'},
      {name:'水电费',id:'8',type:'+'},
      {name:'交通费',id:'9',type:'+'},
      {name:'电话费',id:'10',type:'+'},
      {name:'房费',id:'11',type:'+'},
      {name:'工资',id:'12',type:'-'},
      ],
    recordList:[],
    recordTypeList:[{text: '支出', value: '-'},
      {text: '收入', value: '+'}]
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