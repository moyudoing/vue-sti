<template>
  <div class="sidebar-menu">
    <!-- 添加过渡效果 -->
    <transition-group name="menu-item-transition" tag="div">
      <!-- 遍历菜单路由列表，渲染菜单项 -->
      <router-link
          v-for="route in menuRoutes"
          :key="route.path"
          :to="route.path"
          class="menu-item"
          :class="{ active: isActiveRoute(route.path) }"
      >
        <!-- 显示图标 -->
        <i :class="['fa', `fa-${route.meta?.icon}`]" class="icon"></i>
        <!-- 显示标题 -->
        <span class="title">{{ route.meta?.title }}</span>
      </router-link>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { type RouteRecordRaw, useRoute } from 'vue-router';
import selectRoute from '@/router/modules/select.ts';
import { computed } from 'vue';

// 遍历子路由并打印信息
if (selectRoute.children) {
  selectRoute.children.forEach((route: any) => {
    console.log(`Route name: ${route.name}, Path: ${route.path}`);
  });
}

// 获取当前路由信息
const route = useRoute();

// 计算可用于菜单显示的路由列表，仅保留 select 下的子路由
const menuRoutes = computed<RouteRecordRaw[]>(() => {
  const children = selectRoute.children;
  if (!children) return [];
  return children.map((childRoute) => ({
    ...childRoute,
    path: `${selectRoute.path}/${childRoute.path}`
  }));
});

// 判断当前路由是否激活
const isActiveRoute = (path: string) => {
  return route.path === path;
};
</script>

<style lang="scss" scoped>
/* 导入 Font Awesome 图标库 */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');

.sidebar-menu {
  width: 200px;
  background-color: #2c3e50;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: #bdc3c7;
  text-decoration: none;
  border-radius: 4px;
  margin: 4px 0;
  transition: all 0.3s;

  &:hover {
    background: #34495e;
    color: white;
    transform: translateX(5px);
  }

  &.active {
    background: #3498db;
    color: white;
    transform: translateX(5px);
  }

  .icon {
    margin-right: 12px;
    font-size: 18px;
  }

  .title {
    font-size: 16px;
  }
}

/* 过渡效果 */
.menu-item-transition-enter-active,
.menu-item-transition-leave-active {
  transition: all 0.3s;
}

.menu-item-transition-enter,
.menu-item-transition-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
