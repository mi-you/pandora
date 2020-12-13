import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/home/Home.vue')
const Cart = () => import('@/views/cart/Cart.vue')
const Category = () => import('@/views/category/Category.vue')
const Profile = () => import('@/views/profile/Profile.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/home'
  },{
    path: '/home',
    name: 'Home',
    component: Home
  },{
    path: '/cart',
    name: 'Cart',
    component: Cart
  },{
    path: '/category',
    name: 'Category',
    component: Category
  },{
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})
// 解决vue-router在3.0版本以上重复点菜单报错问题，不影响代码执行只是报错不好看
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
export default router
