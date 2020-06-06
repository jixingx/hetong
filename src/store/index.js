import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let User=JSON.parse(localStorage.getItem('user'))||{}//用户信息
let localDate=localStorage.getItem('expired')//失效时间
let editableTabs=JSON.parse(localStorage.getItem('editableTabs'))||[//tab选项卡
  {
    title: '首页',
    name: '/contract/home'
  }
]

let defaultActive=localStorage.getItem('defaultActive')||"/contract/home" //选项卡和标签的选中
if(Date.now()>localDate){
  localStorage.removeItem('user')
  localStorage.removeItem('expired')
  localStorage.removeItem('editableTabs')
  localStorage.removeItem('defaultActive')
  
}



const state={
  user:User,
  editableTabs:editableTabs,
  defaultActive:defaultActive
}

const getters={
  getUser(state){
    return state.user
  },
  getEditableTabs(state){
    return state.editableTabs
  },
  getDefaultActive(state){
    return state.defaultActive
  }
}

const mutations={
  setUser(state,user){
    state.user=user
  },
  setEditableTabs(state,editableTabs){
    state.editableTabs=editableTabs
  },
  setDefaultActive(state,defaultActive){
    state.defaultActive=defaultActive
  }
}

const actions={
  setUser(context,user){
    context.commit("setUser",user)
  },
  setEditableTabs(context,editableTabs){
    context.commit("setEditableTabs",editableTabs)
  },
  setDefaultActive(context,defaultActive){
    context.commit("setDefaultActive",defaultActive)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
