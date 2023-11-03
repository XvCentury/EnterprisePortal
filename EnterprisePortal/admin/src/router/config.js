import Home from '../views/home/Home.vue'
import Center from '../views/center/Center.vue'
import UserAdd from '../views/user-manage/UserAdd'
import UserList from '../views/user-manage/UserList'
import NewsAdd from '../views/news-manage/NewsAdd'
import NewsList from '../views/news-manage/NewsList'
import ProductAdd from '../views/product-manage/ProductAdd'
import ProductList from '../views/product-manage/ProductList'
import NotFound from '../views/notfound/NotFound'
import NewsEdit from '../views/news-manage/NewsEdit'
import ProductEdit from '../views/product-manage/ProductEdit'



const routes = [
    {
        path: "/index",
        component: Home
    },
    {
        path: "/center",
        component: Center
    },
    {
        path: "/user-manage/adduser",
        component: UserAdd,
        requireAdmin:true
    },
    {
        path: "/user-manage/userlist",
        component: UserList,
        requireAdmin:true
    },
    {
        path: "/news-manage/addnews",
        component: NewsAdd
    },
    {
        path: "/news-manage/newslist",
        component: NewsList
    },
    {
        path: "/news-manage/editnews/:num",
        component: NewsEdit
    },
    {
        path: "/product-manage/addproduct",
        component: ProductAdd
    },
    {
        path: "/product-manage/productlist",
        component: ProductList
    },
    {
        path: "/product-manage/editproduct/:pid",
        component: ProductEdit
    },
    {
        path: "/",
        redirect:'/index'
    },
    {
        path: "/:pathMatch(.*)*",
        name:'NotFound',
        component:NotFound
    },
]

export default routes

