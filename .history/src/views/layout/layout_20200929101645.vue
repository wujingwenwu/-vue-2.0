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
      active-text-color="#ffd04b">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
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
        {icon:"el-icon-lock",name:"首页",path:'/'},

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