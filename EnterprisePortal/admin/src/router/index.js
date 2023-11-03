import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MainBox from '../views/MainBox.vue'
import RoutesConfig from './config.js'
import store from '@/store/index'


const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/mainbox",
    name: "mainbox",
    component: MainBox
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})


//路由拦截: 在每次路由跳转之前都会执行这个回调函数
router.beforeEach((to, from, next) => {
  //如果用户想跳转的是login登录界面，直接next放行
  if (to.name === "login") {
    next()
  } else {
    //如果已授权（已经登录过了） next
    //未授权，重定向到login
    if (!localStorage.getItem('token')) {
      next({
        path: '/login'
      })
    } else {
      //如果是第一次路由，需要先放行（添加）未来所有路由
      if (!store.state.isGetterRouter) {
        //先删除之前所有的嵌套路由
        //由于太困难了，所以选择直接删除mainbox
        router.removeRoute('mainbox')

        ConfigRouter()
        next({
          path: to.fullPath
        })
      }else{
        //不是第一次，说明之前都添加好了，直接放行
        next()
      }
    }
  }
})


//遍历动态添加子路由===========方便后面加权限
const ConfigRouter = () => {

  if(!router.hasRoute('mainbox')){
    router.addRoute({
        path: "/mainbox",
        name: "mainbox",
        component: MainBox
    })
  }

  RoutesConfig.forEach(item => {
    //遍历添加子路由时，每项都用checkPermission方法检测
    checkPermission(item) && router.addRoute('mainbox', item)
  })

  //改变isGetterRouter = true
  store.commit("changeGetterRouter",true)
}

//判断身份是否为true（管理员）的方法 
const checkPermission = (item) =>{
  //检测是否有requireAdmin
  //没有的话返回true，直接遍历进去
  //有的话，如果是1，返回true，也遍历进去
  //如果是2，返回false，此项不遍历进去
  if(item.requireAdmin){
    return store.state.userInfo.role===1
  }
  return true
}


export default router
