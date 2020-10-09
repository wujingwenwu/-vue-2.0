<template>
 <div>
212121
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
    },
   data () {
     return {

   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
      qrcode.toDataURL(this.input).then((res) => {
            console.log(res);
            data.img = res;
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