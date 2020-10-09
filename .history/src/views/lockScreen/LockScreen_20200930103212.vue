<template>
 <div>
   
 <wLockScreen :dialogVisibles.sync="dialogVisibles" @screen="screen"></wLockScreen>
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
   
   },
   methods: {
     screen(){
       this.dialogVisible=true
       console.log(this.dialogVisible);
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
