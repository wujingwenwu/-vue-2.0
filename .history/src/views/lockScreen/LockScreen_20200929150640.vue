<template>
 <div>
  <img src="../../img/锁屏.png" alt="" class="img" @click="click">
 <wLockScreen :dialogVisible="dialogVisible"></wLockScreen>
 </div>
</template>

<script>
 export default {
   data () {
     return {
     dialogVisible: false
     }
   },
   components: {

   },
   methods: {
   click(){
     this.dialogVisible=true
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
