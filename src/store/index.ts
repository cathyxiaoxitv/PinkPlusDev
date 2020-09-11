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
            createTag('日用品', '-'),
            createTag('衣服', '-'),
            createTag('美容', '-'),
            createTag('交际费', '-'),
            createTag('医疗费', '-'),
            createTag('教育费', '-'),
            createTag('水电费', '-'),
            createTag('交通费', '-'),
            createTag('电话费', '-'),
            createTag('房费', '-'),
            createTag('工资', '+'),
            createTag('零花钱', '+'),
            createTag('奖金', '+'),
            createTag('副业', '+'),
            createTag('投资', '+'),
            //better
        ],
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