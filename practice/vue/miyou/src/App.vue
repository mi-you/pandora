<template>
  <div id="app">
    <!-- 
      tag:设置渲染的标签
      replace:设置使用history.replaceState 
      active-class:设置被点击的连接的class的名字，这个只能改一个，
                    要想全部修改在路由里设置linkActiveClass:'active'
    -->
    <router-link to='/home' tag='button' replace active-class='active'>home</router-link>
    <router-link to='/about' tag='button'>about</router-link>
    <router-link :to='{path:"/profile",query:{name:"why",id:"4545"}}' tag='button'>profile</router-link>
    <router-link :to='"/user/" + userId' tag='button'>User</router-link>
    <!-- include,exclude:值是字符串或正则  User,Profile是主键name值-->
    <keep-alive exclude="User,Profile" :include="/\.alive$/">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'list'
    }
  }
}
</script>

<style>
</style>
