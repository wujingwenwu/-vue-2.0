<template>
 <div>
<div class="lock-wrap" @click="lockChange">
        <el-tooltip effect="dark" :content="lockFlag?`点击锁定`:`点击解锁`" placement="bottom">
             <img v-if="lockFlag" src="../../assets/lockOpen.png" alt="">
             <img v-else src="../../assets/lockClose.png" alt="">
         </el-tooltip>
     </div>
 </div>
</template>

<script src="http://cdn.bootcss.com/blueimp-md5/1.1.0/js/md5.min.js"></script> 
<script>
 export default {
   data () {
     return {

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