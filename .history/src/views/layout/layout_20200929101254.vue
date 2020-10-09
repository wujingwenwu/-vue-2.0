<template>
 <div>
  <div class="d-f">

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