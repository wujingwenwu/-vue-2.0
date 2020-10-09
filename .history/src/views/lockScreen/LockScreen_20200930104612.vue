<template>
 <div>
   
 <wLockScreen :dialogVisible.sync="dialogVisible" @screen="screen" @cancel="cancel" @ok="ok">
 <!--<template v-slot:footer>1212112</template>-->
 </wLockScreen>
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
     },
     cancel(){
       this.dialogVisible=false
     },
     ok(){
      this.dialogVisible=false
     },
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
