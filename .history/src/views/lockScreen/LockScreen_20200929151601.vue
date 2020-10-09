<template>
 <div>
  
 <wLockScreen :dialogVisibles="dialogVisibles"></wLockScreen>
 </div>
</template>

<script>
 export default {
   data () {
     return {
     dialogVisibles: false,
     url: require:"../../img/锁屏"
     }
   },
   components: {

   },
   methods: {
   click(){
     this.dialogVisibles=true
   }
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
