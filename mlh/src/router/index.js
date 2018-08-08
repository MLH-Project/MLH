
import Vue from 'vue'
import VueRouter from 'vue-router'
//vue的全局的插件或工具往往需要利用Vue.use去注册一下
Vue.use(VueRouter)

import Home from '../components/pages/Home/Home.vue'
import NotFound from '../components/pages/NotFound/NotFound.vue'
import Mine from '../components/pages/Mine/Mine.vue'
import Login from '../components/pages/Login/Login.vue'
import Detail from '../components/pages/GoodsDetail/Detail.vue'
import List from '../components/pages/GoodsList/List.vue'
import store from '../store'
import overseas from '../components/pages/Home/overseas/overseas.vue'
import BeautyMakeUp from '../components/pages/Home/Beauty-make-up/Beauty-make-up.vue'
import HomeFurnishing from '../components/pages/Home/Home-Furnishing/Home-Furnishing.vue'
import Infant from '../components/pages/Home/Infant/Infant.vue'
import madam from '../components/pages/Home/madam/madam.vue'
import Man from '../components/pages/Home/Man/Man.vue'


//路由表, 设置路由切换的规则
let routes = [
    {
        path: '/',// 当浏览器的地址为 /
        name : 'home',// 给这个路由起个名字
        component: Home// 渲染的组件为Home
    },
    {
        path: '/detail',// 配置detail需要接收一个id参数
        name : 'detail',
        component: Detail
    },
    {
        path: '/overseas',
        name : 'overseas',
        component: overseas
    },
    {
        path: '/Beauty-make-up',
        name : 'BeautyMakeUp',
        component: BeautyMakeUp
    },
    {
        path: '/Home-Furnishing',
        name : 'HomeFurnishing',
        component: HomeFurnishing
    },
    {
        path: '/Infant',
        name : 'Infant',
        component: Infant
    },
    {
        path: '/madam',
        name : 'madam',
        component: madam
    },
    {
        path: '/Man',
        name : 'Man',
        component: Man
    },
    {
        path: '/list',// 配置list需要接收一个id参数
        name : 'list',
        component: List
    },
    {
        path: '/not-found',
        name : 'not-found',
        component: NotFound
    }, 
    { 
        path: '/mine', 
        name: 'mine', 
        component: Mine
    },
    { 
        path: '/login', 
        name: 'login', 
        component: Login 
    },
    {
        path: '**',
        redirect: {name: 'not-found'}
    }
]

//创建路由实例，传入配置项
const router = new VueRouter({
    mode:'history',//默认为hash
    routes
})

//全局路由守卫

let need_user_state = [ 'mine' ]

router.beforeEach((to, from ,next) => {
    //是否需要判断登陆状态
    let need_us = need_user_state.some(name => to.name === name)
    if ( need_us && !store.state.commons.user_state ) {
        next('/login');return false;
    }
    next();
})

export default router