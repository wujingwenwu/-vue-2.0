<template>
 <div>
   
 <wLockScreen :dialogVisibles="dialogVisibles" @screen="screen"></wLockScreen>
 </div>
</template>

<script>
 export default {
   data () {
     return {
     dialogVisibles: false,
   
     }
   },
   components: {
   this.dialogVisibles=true
   },
   methods: {
     screen(){
      
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
