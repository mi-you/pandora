<template>
  <div>
    <h1>profile</h1>
    <h2>userId:{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name:'User',
  computed:{
    userId(){
      return this.$route.params.userId
    }
  },
  created(){
    console.log('User created')
  },
  destroyed(){
    console.log('User destroyed')
  }
}
</script>

<style>

</style>