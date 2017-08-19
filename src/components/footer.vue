<template>
<div class="footer">
  <el-row :gutter="20">
    <el-col :span="12">
      <div class="about" style="float: right"><router-link to="/introduction">关于我们</router-link></div>
    </el-col>
    <el-col :span="12">
      <div class="about"><router-link to="/introduction">TeachCat</router-link></div>
    </el-col>
  </el-row>
</div>
</template>

<script>
    export default{
      data () {
        return {
        }
      },
      components: {
      }
    }
</script>

<style>
  .footer{
    width: 300px;
    position: absolute;
    left: 50%;
    bottom: 120px;
    transform: translateX(-50%);
  }

  .about{
    font-size: 13px;
    height: 20px;
  }
</style>
