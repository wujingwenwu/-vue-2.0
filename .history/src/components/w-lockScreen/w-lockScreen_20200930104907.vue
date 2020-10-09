<template>
 <div>
 <slot name="footer" v-if="$slots.footer"></slot>
<el-button type="primary" @click="screen" v-else>点击锁屏</el-button>
 <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="ok">确 定</el-button>
  </span>
</el-dialog>
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
       
     }
   },
   components: {

   },
   methods: {
      handleClose() {
      this.$emit("update:dialogVisible", false);
    },
      screen(){
       this.$emit("screen")
      },
      cancel(){
         this.$emit("cancel")
      },
      ok(){
        this.$emit("ok")
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