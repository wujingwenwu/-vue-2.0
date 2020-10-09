<template>
 <div>
   <img src="../../static/锁屏.png" alt="" class="img" >
 <wLockScreen :dialogVisibles="dialogVisibles" ></wLockScreen>
 </div>
</template>

<script>
 export default {
   data () {
     return {
     dialogVisibles: 0,
   
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
.img{
  width: 70px;
  height: 70px;
}
</style>
