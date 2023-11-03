import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import New from '../views/New.vue'
import Product from '../views/Product.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = [
  {
    path:'/',
    name:'home',
    component:Home,
  },
  {
    path:'/news',
    name:'news',
    component:News,
  },
  {
    path:'/news/:num',
    name:'new',
    component:New,
  },
  //此路径只有带着num来，才能允许跳转
  {
    path:'/product',
    name:'product',
    component:Product,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//前置钩子函数绑定加载进度条
router.beforeEach((to,from,next)=>{
  NProgress.start()
  next()
})
//前置钩子使加载进度条消失
router.afterEach((to,from,next)=>{
  NProgress.done()
})

export default router
