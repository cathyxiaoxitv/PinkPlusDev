import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import moment from 'moment';
import 'moment/locale/zh-cn'
moment.locale('zh-cn');


Vue.use(Antd);


Vue.config.productionTip = false


Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

