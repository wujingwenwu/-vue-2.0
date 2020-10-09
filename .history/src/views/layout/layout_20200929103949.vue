<template>
 <div >
  <div class="d-f">
     <div class="commit">
      <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"  
      active-text-color="#ffd04b" v-for="item in arr" :key="item.path">
      <el-menu-item   :index="item.path" @click="select(item.path)">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
     </div>
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
        {icon:"el-icon-lock",name:"锁屏",path:'/lockScreen'},

       ]
     }
   },
   components: {

   },
   methods: {
   select(path){
     console.log(path);
     this.$router.push(path)
   },
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
.commit{
    width: 250px;
}
</style>