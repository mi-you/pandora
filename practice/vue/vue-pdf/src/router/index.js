import Vue from 'vue'
import VueRouter from 'vue-router'

const pdf = () => import('@/views/pdf.vue')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/pdf'
  },
  {
    path: '/pdf',
    name: 'pdf',
    component: pdf
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
