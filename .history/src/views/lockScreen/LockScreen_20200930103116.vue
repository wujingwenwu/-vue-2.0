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
       this.dialogVisibles=true
       console.log(this.dialogVisibles);
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
