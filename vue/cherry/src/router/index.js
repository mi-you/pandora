import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Index.vue'
const VideoPlay = () => import(/* webpackChunkName: "video" */ 'views/videoPlay/Index.vue')
const AudioPlay = () => import(/* webpackChunkName: "audio" */ 'views/audioPlay/Index.vue')
const PdfToImage = () => import(/* webpackChunkName: "pdf" */ 'views/pdfToImage/Index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videoPlay',
    name: 'videoPlay',
    component: VideoPlay
  },
  {
    path: '/audioPlay',
    name: 'audioPlay',
    component: AudioPlay
  },
  {
    path: '/pdfToImage',
    name: 'pdfToImage',
    component: PdfToImage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
