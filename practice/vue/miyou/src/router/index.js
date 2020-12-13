import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../components/home')
const About = () => import('../components/about')
const User = () => import('../components/user')
const Profile = () => import('../components/profile')
const HomeNews = () => import('../components/homeNews')
const HomeMessage = () => import('../components/homeMessage')

Vue.use(Router)

const routes = [
  {
    path:'/',//这个地方加不加'/'都行
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    beforeEnter:(to,from,next) => {  //路由独享守卫
      next() //不调这个不能跳转
    },
    meta:{title:"首页"},
    children:[
      // {
      //   path:'',
      //   redirect:'news'
      // },
      {
        path:'news',
        component:HomeNews
      },{
        path:'message',
        component:HomeMessage
      }
    ]
  },{
    path:'/about',
    meta:{title:"关于"},
    component:About
  },{
    path:'/user/:userId',
    meta:{title:"用户"},
    component:User
  },{
    path:'/profile',
    meta:{title:"档案"},
    component:Profile
  }
]
const router = new Router({
  routes,
  linkActiveClass:'active',
  mode:'history'
})

//全局导航守卫
  // 前置守卫(guard)
router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title
  next()  //next(false)阻止跳转，next('/home')跳到home
})

  // 后置守卫(hook)
router.afterEach((to,from) => {

})

// 解决vue-router在3.0版本以上重复点菜单报错问题，不影响代码执行只是报错不好看
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router





