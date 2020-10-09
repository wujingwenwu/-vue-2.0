<template>
 <div>
 11
  <img :src="url" alt="">
 </div>
</template>

<script>
 export default {
     props:{
      url:{
          type: String,
      }
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
   console.log(this.url);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>