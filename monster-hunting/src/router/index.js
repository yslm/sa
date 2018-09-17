import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
import personal from '@/components/personalCenter.vue'


Vue.use(Router);

export default new Router({
  routes: [

    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      name:'index',
      component:Index,
      // component:resolve=>require(['@/components/index'],resolve),
      children:[{
        path:'/personal',
        name:'personal',
        component:personal,
        // component:resolve=>require(['@/components/personalCenter.vue'],resolve)

      }


      ]
    }


  ]
})
