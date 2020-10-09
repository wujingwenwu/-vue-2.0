<template>
 <div>
 <w-countdown :time="time" :name="name"></w-countdown>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     time: 60,
     name: "发送验证码a"
   }
   },
   components: {

   },
   methods: {

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