<template>
 <div>
 <div class="d-f">
  <div><el-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</el-input></div>
<div><el-button type="primary" @click="qrcode">生成二维码</el-button></div>
 </div>
 <div v-if="flag===true"> <w-qrcode :input="input" :flag.sync="flag"></w-qrcode></div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     input:'',
     flag: false
   }
   },
   components: {

   },
   methods: {
    qrcode(){
     this.flag=true
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