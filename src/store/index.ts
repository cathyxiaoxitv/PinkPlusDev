import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from "@/lib/createId";
import defaultTagList from "@/constants/defaultTagList";

Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        tagList: [],
        recordList: [],
        createTagError: null,
    } as RootState,
    mutations: {
        setDefault(){
            window.localStorage.setItem('tagList',JSON.stringify(defaultTagList))
        },
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
        fetchTags(state) {
            state.tagList = JSON.parse(window.localStorage.getItem('tagList')||'[]')
            if(!state.tagList|| state.tagList.length === 0){
                store.commit('setDefault')
            }
        },
        createTag(state, newTag:Tag) {
            const names = state.tagList.map(tag => tag.name);
            if (names.indexOf(newTag.name) >= 0) {
                state.createTagError = new Error('tag name duplicated')
                return;
            }
            const id = createId().toString();
            state.tagList.push({id, name: newTag.name,type:newTag.type})
            store.commit('saveTags')
        },
        saveTags(state){
            window.localStorage.setItem('tagList',JSON.stringify(state.tagList))
        }
    },
    actions: {},
    modules: {}
});

export default store;