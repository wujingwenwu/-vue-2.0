<template>
 <div>
   <img v-bind:src="url" alt="" class="img" >
 <wLockScreen :dialogVisibles="dialogVisibles" :url="url"></wLockScreen>
 </div>
</template>

<script>
 export default {
   data () {
     return {
     dialogVisibles: false,
     url: "../../../src/static/锁屏.png"
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
