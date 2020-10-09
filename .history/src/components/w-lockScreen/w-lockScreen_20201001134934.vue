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
<div class="box d-f j-c-c a-i-c" v-if="flag===false">
 <div class="box1 d-f f-d-c a-i-c j-c-c">
 <img src="../../image/97e9216ce0b02d45c9969a5ac37a7454.jpg" alt="" class="imgs">
 <el-input placeholder="请输入密码" v-model="value" show-password class="input"></el-input>
   <div class="m-t-20">
   <el-button type="primary" @click="unlock" >点击解锁</el-button>
   </div>
 </div>
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
        password:'',
        value:'',
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
          //存vuex
          // this.$store.commit("setUser",this.input)
          // console.log(this.$store.state.passpords);
           this.$emit("ok"),
           this.flag=false
           localStorage.setItem("flag",JSON.stringify(this.flag))
        }
      },
      unlock(){
           this.password=localStorage.getItem('password')
        console.log(this.password);

        if(this.password===this.value){

           this.flag=true
           localStorage.removeItem("password")
            localStorage.removeItem("flag")
           this.$message({
          message: '解锁成功',
          type: 'success'
        });
        this.input="",
        this.value=""
        
        }if(this.value===""){
         this.$message.error('密码不能为空');
          console.log(this.password);
        console.log(this.value);
        }if(this.password !==this.value &&this.input !==""){
          this.$message.error('密码不正确');
        }
      }
   },
   mounted() {
    //  this.password=this.setPasswords

  
   

      
    //  console.log(this.setPasswords);
      this.flag=JSON.parse(localStorage.getItem("flag"))
   },
   watch: {
    
   },
   computed: {
    //  setPasswords(){
    //    return this.$store.state.passpords
    //  }
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
 background: url('../../image/2c61cf188329362c571d64eda1196571.jpg');
 width: 100%;
 height: 100%;
}
.box1{
  width: 400px;
  height: 300px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 20px #cccccc;
}
.input{
  width: 300px;
}
.imgs{
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
}
</style>