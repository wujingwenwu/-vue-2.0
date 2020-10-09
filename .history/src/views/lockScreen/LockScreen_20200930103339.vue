<template>
 <div>
   
 <wLockScreen :dialogVisible.sync="dialogVisible" @screen="screen"></wLockScreen>
 </div>
</template>

<script>
 export default {
   data () {
     return {
     dialogVisible: false,
   
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
