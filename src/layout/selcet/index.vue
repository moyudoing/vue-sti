<template>
  <div class="main-layout">
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
    <div class="content-area">
      <!-- 头部面包屑导航 -->
      <header class="header">
        <breadcrumb />
        <div class="backHome">
          <BackHome/>
        </div>
      </header>

      <!-- 主要内容区域 -->
      <main class="main-content">
        <!-- 路由视图，添加过渡动画 -->
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from './SidebarMenu/index.vue'
import Breadcrumb from './Breadcrumb/index.vue'
import BackHome from './BackHome/index.vue'
</script>

<style lang="scss" scoped>
/* 全局字体设置 */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

.main-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;

  /* 侧边栏样式 */
  .sidebar {
    background: linear-gradient(180deg, #2c3e50 0%, #1a252f 100%);
    color: white;
    padding: 20px;
    position: fixed;
    width: 240px;
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
      }
    }
  }

  /* 内容区域样式 */
  .content-area {
    margin-left: 240px;
    padding: 20px;
    background-color: #f4f7fa;
    transition: margin-left 0.3s ease;
  }

  /* 头部样式 */
  .header {
    margin-bottom: 20px;
    padding: 15px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }

  /* 主要内容区域样式 */
  .main-content {
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
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

    .content-area {
      margin-left: 0;
    }
  }
}
</style>
