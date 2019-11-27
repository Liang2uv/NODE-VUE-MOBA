<template>
  <el-container style="height: 100vh">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-active="$route.path" unique-opened>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>内容管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/categories/list">分类管理</el-menu-item>
            <el-menu-item index="/items/list">物品管理</el-menu-item>
            <el-menu-item index="/heros/list">英雄管理</el-menu-item>
            <el-menu-item index="/articles/list">文章管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>运营管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/ads/list">广告位管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-message"></i>系统管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin_users/list">管理员管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view :key="$route.path"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-aside {
  color: #333;
}
</style>

<script>
export default {
  name: 'mainBox'
};
</script>