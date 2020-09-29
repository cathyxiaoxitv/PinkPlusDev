import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);


const createTag = (name: string, type: string) => {
    return { name: name, type: type}

}
createTag('饮食费', '-')
    createTag('日用品', '-')
    createTag('衣服', '-')
    createTag('美容', '-')
    createTag('交际费', '-')
    createTag('医疗费', '-')
    createTag('教育费', '-')
    createTag('水电费', '-')
    createTag('交通费', '-')
    createTag('电话费', '-')
    createTag('房费', '-')
    createTag('工资', '+')
    createTag('零花钱', '+')
    createTag('奖金', '+')
    createTag('副业', '+')
    createTag('投资', '+');

const store = new Vuex.Store({
    state: {
        tagList: [],
        recordList: [],
        createTagError:null,
    } as RootState,
    mutations: {
         fetchRecords(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
        },
        createRecord(state, record) {
            const clonedRecord: RecordItem = clone(record);
            state.recordList.push(clonedRecord);
            store.commit('saveRecords');
        },
        saveRecords(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
        },
        fetchTags(state){
             state.tagList = JSON.parse(window.localStorage.getItem('tagList')||'[]')
            if(!state.tagList || state.tagList.length===0){
                store.commit('createTag','衣服')
            }
        },
        createTag(state,name:string){
             const names = state.tagList.map(tag=>tag.name);
             if(names.indexOf(name)>=0){
                 state.createTagError = new Error('tag name duplicated')
                 return;
             }
             const id = createId().toString()



}
    },
    actions: {},
    modules: {}
});

export default store;