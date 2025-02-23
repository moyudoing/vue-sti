<template>
  <header class="main-header">
    <nav class="nav-container">
      <router-link to="/" class="logo">
        <img src="@/assets/favicon.ico" alt="DJI Logo">
      </router-link>

      <div class="nav-menu">
        <template v-for="item in menuItems" :key="item.path">
          <router-link
              :to="item.path"
              class="nav-item"
              active-class="active">
            {{ item.title }}
          </router-link>
        </template>
      </div>

      <div class="mobile-menu">
        <button @click="toggleMenu">
          <MenuIcon />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface MenuItem {
  title: string
  path: string
}

const menuItems = ref<MenuItem[]>([
  { title: '产品', path: '/products' },
  { title: '解决方案', path: '/solutions' },
  { title: '服务与支持', path: '/support' },
  { title: '探索', path: '/explore' }
])

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style lang="scss" scoped>
.main-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  z-index: 1000;

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo img {
      height: 32px;
    }

    .nav-menu {
      display: flex;
      gap: 2rem;

      .nav-item {
        color: #333;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s;

        &:hover,
        &.active {
          color: #007aff;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none !important;
  }

  .mobile-menu {
    display: block !important;
  }
}
</style>
