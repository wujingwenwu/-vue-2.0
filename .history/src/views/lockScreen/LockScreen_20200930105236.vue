<template>
 <div>
   
 <wLockScreen :dialogVisible.sync="dialogVisible" @screen="screen" @cancel="cancel" @ok="ok" @handleClose="handleClose">
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
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then((res) => {
            done();
            this.dialogVisible=false
            console.log(res);
          })
          .catch((err) => {
              console.log(err);
               this.dialogVisible=false
          });
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
