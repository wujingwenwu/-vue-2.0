<template>
 <div>
<img :src="img" alt="">
 </div>
</template>

<script>
import qrcode from "qrcode"
 export default {
   name:'',
   props:{
     input:{
       type: String,
     },
     flag:{
       type: Boolean,
     }
    },
   data () {
     return {
     img: ''
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
     console.log(this.flag);
     if(this.flag===true){
       qrcode.toDataURL(this.input).then((res) => {
            console.log(res);
            this.img=res
          });
     }
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>