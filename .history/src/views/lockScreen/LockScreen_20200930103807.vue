<template>
 <div>
   <template v-shot:footer>1212112</template>
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
