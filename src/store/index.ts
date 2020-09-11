import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);

let id = 0

const createTag = (name: string, type: string) => {
    id += 1
    return {id: id, name: name, type: type}

}
const store = new Vuex.Store({
    state: {
        tagList: [createTag('饮食费', '-'),
            createTag('工资', '+'),
            createTag('美容', '-')],
        recordList: []
    } as RootState,
    mutations: {
        fetchRecords(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
        },
        createRecord(state, record) {
            const clonedRecord: RecordItem = clone(record);
            console.log(record);
            clonedRecord.createdAt = new Date().toISOString();
            state.recordList.push(clonedRecord);
            store.commit('saveRecords');
        },
        saveRecords(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
        }
    },
    actions: {},
    modules: {}
});

export default store;