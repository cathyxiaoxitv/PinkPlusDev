import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from "@/lib/createId";
import defaultTagList from "@/constants/defaultTagList";
import {RecordItem, RootState, Tag} from '@/views/custom';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        tagList: [],
        customTagList:[],
        recordList: [],
        createTagError: null,
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
        fetchTags(state) {
            state.tagList = JSON.parse(window.localStorage.getItem('tagList')||'[]')
            if(!state.tagList|| state.tagList.length === 0){
                store.commit('setDefault')
            }
        },
        setDefault(){
            for(let i = 0;i<defaultTagList.length;i++){
                store.commit('createTag',defaultTagList[i])
            }
        },
        createTag(state, tag:Tag) {
            const names = state.tagList.map(tag => tag.name);
            if (names.indexOf(tag.name) >= 0) {
                state.createTagError = new Error('tag name duplicated')
                return;
            }
            const id = createId().toString();
            state.tagList.push({id, name: tag.name,type:tag.type})
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