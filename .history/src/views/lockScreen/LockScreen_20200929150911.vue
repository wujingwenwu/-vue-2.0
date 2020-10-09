<template>
 <div>
  <img src="../../img/锁屏.png" alt="" class="img" @click="click">
 <wLockScreen :dialogVisibles="dialogVisibles"></wLockScreen>
 </div>
</template>

<script>
 export default {
   data () {
     return {
     dialogVisibles: true
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
