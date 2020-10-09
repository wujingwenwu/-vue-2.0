<template>
 <div>
 <img :src="url" alt="" class="img" @click="click">
 <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
 </div>
</template>

<script>
 export default {
     props:{
       dialogVisibles:{
           type: Boolean,
       },
       url:{
           type: String,
       }
     },
   data () {
     return {
        dialogVisible: false
     }
   },
   components: {

   },
   methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then((res) => {
            done();
            console.log(res);
          })
          .catch((err) => {
              console.log(err);
          });
      }
   },
   mounted() {
       console.log(this.dialogVisibles);
    this.dialogVisible=this.dialogVisibles
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>