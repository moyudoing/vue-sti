<template>
  <div class="main-layout">
    <aside class="sidebar">
      <div class="logo-area">
        <h1>DIY配置系统</h1>
      </div>
      <nav class="sidebar-nav">
        <sidebar-menu />
      </nav>
    </aside>

    <div class="content-area">
      <header class="header">
        <breadcrumb />
      </header>

      <main class="main-content">
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
</script>

<style lang="scss" scoped>
.main-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;

  .sidebar {
    background: #2c3e50;
    color: white;
    padding: 20px;
    position: fixed;
    width: 240px;
    height: 100vh;
  }

  .content-area {
    margin-left: 240px;
    padding: 20px;
  }

  .header {
    margin-bottom: 20px;
  }
}

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
