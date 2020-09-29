import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue';
import Reports from '@/views/Reports.vue';
import NotFound from '@/views/NotFound.vue';
import Calendar from '@/views/Calendar.vue';
import Edit from "@/components/Money/Edit.vue";

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path:'/',
      redirect:'/money'
    },
    {
      path:'/money/edit',
      component:Edit,
    },
    {
      path:'/money',
      component:Money,
    },
    {
      path:'/calendar',
      component:Calendar,
    },
    {
      path:'/reports',
      component:Reports
    },
    {
      path:'*',
      component:NotFound
    }
]

const router = new VueRouter({
  routes
})

export default router
