<template>
  <div class="navbar">
    <el-menu
      :default-active="route.fullPath"
      class="el-menu-demo"
      mode="horizontal"
      
      :router="true"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/news">新闻中心</el-menu-item>
      <el-menu-item index="/product">产品与服务</el-menu-item>
      <el-menu-item index="" @click="handleClick">登录</el-menu-item>
      <!-- 登录按钮部署上线使才能使用路由跳转 -->
    </el-menu>
    <div class="right">企业门户官网</div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

const handleClick = () =>{
  window.location = "http://localhost:8081"
}
</script>

<style lang="scss" scoped>
.navbar{
  position: sticky;
  top: 0px;
  z-index: 1000;
}
.right{
  position: fixed;
  top: 0;
  right: 20px;
  width: 100px;
  height: 59px;
  line-height: 59px;
  text-align: center;
}
</style>