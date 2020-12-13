<template>
  <div id="app">
    <tab-bar>
      <!-- 默认为default，所以下面的template标签可以不写 -->
        <tab-bar-item path='/home'>
          <template v-slot:item-icon>
           <img src="./assets/img/tabbar/photoGray.png" alt="龙猫">
          </template>
          <template v-slot:item-icon-active>
           <img src="./assets/img/tabbar/photo.png" alt="龙猫">
          </template>
          <template v-slot:item-text>
           <span>首页</span>
          </template>
        </tab-bar-item>
        <tab-bar-item path='/category'>
           <template v-slot:item-icon>
           <img src="./assets/img/tabbar/photoGray.png" alt="龙猫">
          </template>
          <template v-slot:item-icon-active>
           <img src="./assets/img/tabbar/photo.png" alt="龙猫">
          </template>
          <template v-slot:item-text>
           <span>分类</span>
          </template>
        </tab-bar-item>
        <tab-bar-item path='/cart'>
          <template v-slot:item-icon>
           <img src="./assets/img/tabbar/photoGray.png" alt="龙猫">
          </template>
          <template v-slot:item-icon-active>
           <img src="./assets/img/tabbar/photo.png" alt="龙猫">
          </template>
          <template v-slot:item-text>
           <span>购物车</span>
          </template>
        </tab-bar-item>
        <tab-bar-item path='/profile'>
           <template v-slot:item-icon>
           <img src="./assets/img/tabbar/photoGray.png" alt="龙猫">
          </template>
          <template v-slot:item-icon-active>
           <img src="./assets/img/tabbar/photo.png" alt="龙猫">
          </template>
          <template v-slot:item-text>
           <span>个人</span>
          </template>
        </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabBar from './components/tabbar/TabBar'
import tabBarItem from './components/tabbar/TabBarItem'
export default {
  name:'App',
  components:{
    tabBar,
    tabBarItem
  }
}
</script>
<style>
  @import './assets/css/base.css';
</style>
