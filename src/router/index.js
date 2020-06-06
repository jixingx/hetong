import Vue from 'vue'
import VueRouter from 'vue-router'
import stroe from '../store/index'

import Login from '../views/Login.vue'//登录
import Contract from '../views/Contract.vue'//首页
import Home from "../views/contract/Home.vue"//主页
import Launch from "../views/contract/Launch.vue"//发起
import Oway from "../views/contract/Oway.vue"//台账
import Gtasks from "../views/contract/Gtasks.vue"//待办
import Intransit from "../views/contract/Intransit.vue"//在途
import Statistics from "../views/contract/Statistics.vue"//统计
import Overview from "../views/contract/Overview.vue"//统计

import {Message} from 'element-ui'

Vue.use(VueRouter)

  const routes = [
    { path: '/', redirect: '/contract' },
    { path: '/login', name:'login',component: Login },
    { 
      path: '/contract',
      component: Contract,
      children: [
        { path: '/',redirect:'home' },
        { path: 'home',name:'home',component: Home },
        { path: 'launch',name:'launch',component: Launch },
        { path: 'gtasks',name:'gtasks',component: Gtasks },
        { path: 'intransit',name:'intransit',component: Intransit },
        { path: 'oway',name:'oway',component: Oway },
        { path: 'statistics',name:'statistics',component: Statistics },
        { path: 'overview',name:'overview',component: Overview },
        // { path: 'setup',name:'setup',component: Setup },
        // { path: 'mx',name:'mx',component: Mx },
      ]
    },
  ]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name!="login"){
    let name=stroe.getters.getUser.Name;
    if(name){
      next()
    }else{
      Message.error('用户失效，请重新登录');
      next({path:'/login'})
    }
  }else{
    next()
  }
})

export default router
