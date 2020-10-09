<template>
 <div>
<img :src="img" alt="" width="" height="">
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
     width:{
       type: Number,
     },
      width:{
       type: Number,
     },
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
   
       qrcode.toDataURL(this.input).then((res) => {
            console.log(res);
            this.img=res
          });
   
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>