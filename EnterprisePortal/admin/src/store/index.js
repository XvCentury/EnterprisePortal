import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
export default createStore({
  state: {
    isGetterRouter:false,
    isCollapsed:true,
    //用来后端存储传来的用户信息
    userInfo:{},
  },
  getters: {
  },
  mutations: {
    changeGetterRouter(state,value){
      state.isGetterRouter = value
    },
    //控制侧边栏的展开缩放
    changeCollapsed(state){
      state.isCollapsed=!state.isCollapsed
    },
    changeUserInfo(state,value){
      state.userInfo = {
        ...state.userInfo,
        ...value
      }
    },
    clearUserInfo(state,value){
      state.userInfo = {}
    },
  },
  actions: {
  },
  modules: {
  },
  //持久化组件
  plugins:[createPersistedState({
    paths:['isCollapsed','userInfo']
  })]
})
