<script setup lang="ts">
import NavMenu from './NavMenu/index.vue'
import SideNav from "@/layout/home/SideNav.vue";
import Footer from "@/layout/home/Footer.vue";
</script>

<template>
  <div class="main-content">
    <header class="header">
      <NavMenu class="nav-menu" />
    </header>

    <router-view :key="$route.fullPath" />
  </div>
  <Footer class="footer"/>
  <SideNav class="side-nav"/>
</template>

<style scoped>
/* 全局样式 */
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header{
  display: flex;
}

/* 主要内容区域样式 */
.main-content {
  flex: 1;
  padding-top: 60px; /* 空出导航栏的空间 */
}


</style>
