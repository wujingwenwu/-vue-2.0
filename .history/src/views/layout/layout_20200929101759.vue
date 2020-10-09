<template>
 <div>
  <div class="d-f">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" v-for="(item,index) in arr" :key="index">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       arr:[
        {icon:"el-icon-s-home",name:"首页",path:'/'},
        {icon:"el-icon-lock",name:"锁屏",path:'/'},

       ]
     }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>