<template>
  <div class="select-layout">
    <!-- 侧边栏 -->
    <aside class="sidebar">
      <!-- 侧边栏顶部 logo 区域 -->
      <div class="logo-area">
        <h1>DIY配置系统</h1>
      </div>
      <!-- 侧边栏导航 -->
      <nav class="sidebar-nav">
        <sidebar-menu />
      </nav>
    </aside>

    <!-- 内容区域 -->
    <div class="content-wrapper">
      <!-- 头部面包屑导航 -->
      <header class="header">
        <breadcrumb class="left-content"/>
        <BackHome class="right-content"/>
      </header>
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from './SidebarMenu/index.vue'
import Breadcrumb from './Breadcrumb/index.vue'
import BackHome from './BackHome/index.vue'
</script>

<style lang="scss" scoped>
$sidebar-width: 240px;
$bg-color: #f9fafb;
$header-bg-color: white;
$shadow-light: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
$shadow-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
$border-radius: 8px;

/* 全局样式 */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: $bg-color;
  display: flex;
  min-height: 100vh;
}

.select-layout {
  width: 100%;
}

.main-layout {
  display: grid;
  grid-template-columns: $sidebar-width 1fr;
  min-height: 100vh;
  width: 100%;
}

/* 侧边栏样式 */
.sidebar {
  background: linear-gradient(180deg, #34495e 0%, #2c3e50 100%);
  color: white;
  padding: 20px;
  position: fixed;
  width: $sidebar-width;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;

  /* logo 区域样式 */
  .logo-area {
    text-align: center;
    margin-bottom: 30px;

    h1 {
      font-size: 24px;
      letter-spacing: 1px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      color: #ecf0f1;
    }
  }
}

/* 内容包装器样式 */
.content-wrapper {
  margin-left: $sidebar-width;
  transition: margin-left 0.3s ease;
  display: flex;
  flex-direction: column;
  width: calc(100% - $sidebar-width); // 计算内容区域宽度
  height: 100vh;
}

/* 头部样式 */
.header {
  margin-bottom: 20px;
  padding: 15px;
  background-color: $header-bg-color;
  box-shadow: $shadow-light;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  position: fixed; // 固定头部
  top: 0;
  left: $sidebar-width;
  right: 0;
  z-index: 1; // 确保头部在最上层

  .left-content {
    justify-self: start;
  }

  .right-content {
    justify-self: end;
  }
}

/* 主要内容区域样式 */
.main-content {
  flex: 1;
  padding: 20px;
  background-color: $header-bg-color;
  border-radius: $border-radius;
  box-shadow: $shadow-light;
  transition: all 0.3s ease;
  margin-top: 120px;

  &:hover {
    box-shadow: $shadow-hover;
  }
}

/* 淡入淡出过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-layout {
    grid-template-columns: 1fr;

    .sidebar {
      display: none;
    }

    .content-wrapper {
      margin-left: 0;
      width: 100%;
    }

    .header {
      left: 0;
    }
  }
}
</style>
