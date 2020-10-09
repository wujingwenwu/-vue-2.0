<template>
 <div>
  <el-button type="primary" @click="verification">{{time}}</el-button>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
     time:{
         type: Number,
     },
     name:{
         type: String,
     }
    },
   data () {
     return {
     flag:true,
     times: ""
   }
   },
   components: {

   },
   methods: {
    verification(){
        if (TouchList.flag) {
        this.flag = false;
        let langtime = this.time;
        
        const a = setInterval(() => {
          if (langtime == 0) {
            this.flag = true;
            this.times = "发送验证码";
            clearInterval(a);
          } else {
            
            langtime--;
            this.times = `倒计时${langtime}秒`;
          }
        }, 1000);}
    }
   },
   mounted() {
    this.times=this.name
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>