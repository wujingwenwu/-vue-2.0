<template>
 <div>
  <el-button type="primary" @click="verification">{{time}}</el-button>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     flag:true
   }
   },
   components: {

   },
   methods: {
    verification(){
         if (this.flag) {
        this.flag = false;
        let langtime = 60;
        let _this = this;
        let a = setInterval(() => {
          if (langtime == 0) {
            _this.flag = true;
            _this.time = "发送验证码";
            clearInterval(a);
          } else {
            langtime--;
            _this.time = `倒计时${langtime}秒`;
          }
        }, 1000);
      } else {
        console.log("不能点了");
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

</style>