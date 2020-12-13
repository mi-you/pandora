<template>
  <div>
    <h1>我是home</h1>
    <router-link to='/home/news'>news</router-link>
    <router-link to='/home/message'>message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Home.alive',
  data(){
    return {
      path:'/home/news'
    }
  },
  methods:{

  },
  // 如果keep-alive，created执行一次，destroyed不执行，activated和deactivated多次执行
  // 若没keep-alive,activated和deactivated都不执行
  created(){
    console.log("created")
  },
  destroyed(){
    console.log('destroyed')
  },
  activated(){
    console.log('Home activated')
    this.$router.push(this.path)
  },
  deactivated(){
    console.log('Home deactivated')
  },
  beforeRouteLeave(to,from,next){
    this.path = this.$route.path
    next()
  }
}
</script>

<style>

</style>