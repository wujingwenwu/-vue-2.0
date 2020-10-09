<template>
 <div>
 <slot name="footer" v-if="$slots.footer"></slot>
<el-button type="primary" @click="screen" v-else>点击锁屏</el-button>
 <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="ok">确 定</el-button>
  </span>
</el-dialog>
<div class="box" v-if="flag===false" :style=" background: url('../../image/2c61cf188329362c571d64eda1196571.jpg');">

</div>
 </div>
</template>

<script>
 export default {
     props:{
       dialogVisible:{
           type: Boolean,
       },
     },
   data () {
     return {
        input:'',
        flag: true,
     }
   },
   components: {

   },
   methods: {
      handleClose() {
       this.$emit("handleClose")
      },
      screen(){
       this.$emit("screen")
      },
      cancel(){
         this.$emit("cancel")
      },
      ok(){
        if(this.input ===""){
      this.$message.error('密码不能为空');
        }else{
          localStorage.setItem("password",this.input)
           this.$emit("ok"),
           this.flag=false
        }
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
.box{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba($color: #000000, $alpha: 0.5);
 
}
</style>