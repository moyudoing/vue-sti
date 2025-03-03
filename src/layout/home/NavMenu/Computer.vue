<template>
  <!-- 使用 v-if 指令判断是否为非移动设备，如果是则渲染水平菜单 -->
  <el-menu
      v-if="!isMobile"
      class="desktop-nav"
      mode="horizontal"
      :default-active="activeRoute"
      background-color="#333"
      text-color="#fff"
      active-text-color="#ffd04b"
  >
    <!-- 使用 v-for 指令遍历 menuRoutes 数组，动态生成菜单项 -->
    <el-menu-item
        v-for="route in routes"
        :key="route?.name"
        @click="navigateTo(route?.path)"
    >
      <!-- 这里的 div 标签根据 route.meta.isShow 的值决定是否渲染，不过此空 div 可能无实际意义 -->
      <div v-if="route.meta?.isShow">
        {{ route.meta?.title }}
      </div>
    </el-menu-item>
    <Avatar class="avatar" />
  </el-menu>
</template>

<script setup lang="ts">
import { useRouteStore } from '@/stores/modules/route.ts'
import { useNavStore } from '@/stores/modules/navStore.ts'
import { ElMenuItem } from "element-plus";
import Avatar from '@/layout/home/Avatar/index.vue'
import type { RouteRecordRaw } from "vue-router";

const routeStore = useRouteStore();
const navStore = useNavStore();

const routes: RouteRecordRaw[] = routeStore.getHomeRoute();
const { isMobile, activeRoute, navigateTo } = navStore;
</script>

<style scoped lang="scss">
/* 为桌面导航菜单添加样式，使其水平居中显示 */
.desktop-nav {
  display: flex;
  justify-content: center;
  align-items: center; /* 新增：让导航栏内元素垂直居中 */
  background: linear-gradient(to bottom, #444, #333); /* 背景渐变 */
  border-radius: 4px; /* 圆角 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 阴影 */
  padding: 0 20px; /* 内边距 */
  position: relative; /* 新增：为了让头像能相对于导航栏定位 */

  /* 菜单项样式 */
  .el-menu-item {
    padding: 0 20px; /* 内边距 */
    font-size: 16px; /* 字体大小 */
    transition: background-color 0.3s ease; /* 过渡效果 */

    &:hover {
      background-color: rgba(255, 255, 255, 0.1); /* 悬停背景颜色 */
    }

    &.is-active {
      background-color: rgba(255, 208, 75, 0.1); /* 激活背景颜色 */
    }
  }
}

.avatar {
  cursor: pointer;
  transition: transform 0.3s ease;
  position: absolute; /* 新增：绝对定位 */
  right: 20px; /* 新增：距离右侧 20px */
  top: 50%; /* 新增：垂直居中 */
  transform: translateY(-50%); /* 新增：垂直居中 */

  &:hover {
    transform: translateY(-50%) scale(1.1); /* 新增：悬停时保持垂直居中并放大 */
  }
}
</style>
