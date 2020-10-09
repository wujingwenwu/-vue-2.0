<template>
 <div>
<img :src="img" alt="" :width="width" :height="height">
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
      height:{
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