<template>
  <div class='tab-bar-item' @click="itemClick">
    <div v-if='isActive'><slot name='item-icon-active'></slot></div>
    <div v-else><slot name='item-icon'></slot></div>
    <div :class={active:isActive}><slot name='item-text'></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  data(){
    return {
      // isActive:true
    }
  },
  props:{path:String},
  computed:{
    isActive(){
      return this.$route.path.includes(this.path)
    }
  },
  methods:{
    itemClick(){
      // this.$router.push(this.path)
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
  }
  .active{
    color: red;
  }
</style>