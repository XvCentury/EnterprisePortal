<template>
  <el-aside :width="$store.state.isCollapsed ? '64px' : '200px'">
    <el-menu
      :collapse="$store.state.isCollapsed"
      :collapse-transition="false"
      :router="true"
      :default-active="route.fullPath"
    >
      <el-menu-item index="/index">
        <el-icon><HomeFilled /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/center">
        <el-icon><Avatar /></el-icon>
        <span>个人中心</span>
      </el-menu-item>

      <el-sub-menu index="/user-manage" v-admin>
        <template #title>
          <el-icon><UserFilled /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/user-manage/adduser">添加用户</el-menu-item>
        <el-menu-item index="/user-manage/userlist">用户列表</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="/news-manage">
        <template #title>
          <el-icon><MessageBox /></el-icon>
          <span>新闻管理</span>
        </template>
        <el-menu-item index="/news-manage/addnews">创建新闻</el-menu-item>
        <el-menu-item index="/news-manage/newslist">新闻列表</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="/product-manage">
        <template #title>
          <el-icon><Reading /></el-icon>
          <span>产品管理</span>
        </template>
        <el-menu-item index="/product-manage/addproduct">添加产品</el-menu-item>
        <el-menu-item index="/product-manage/productlist"
          >产品列表</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
import {
  HomeFilled,
  Avatar,
  UserFilled,
  MessageBox,
  Reading,
  Pointer,
} from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore()
const route = useRoute();
//console.log(route.fullPath)//当前路由对象，用于写菜单当前选中高亮

//vAdmin指令拿到当前绑定的dom节点
const vAdmin = {
  mounted(el){
    //console.log(el)
    if(store.state.userInfo.role!==1){
      el.parentNode.removeChild(el)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
}
.el-menu {
  height: 100vh;
}
</style>