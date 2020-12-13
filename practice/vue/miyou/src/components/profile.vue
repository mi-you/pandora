
<template>
  <div>
    <h1>profile</h1>
    <h1>{{$route.query.name}}</h1>
    <h1>{{$route.query.id}}</h1>
  </div>
</template>

<script>
export default {
  name:'Profile',
  created(){
    console.log('Profile created')
  },
  destroyed(){
    console.log('Profile destroyed')
  }
}
</script>

<style>

</style>