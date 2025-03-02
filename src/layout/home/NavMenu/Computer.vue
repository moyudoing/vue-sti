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
  </el-menu>
</template>


<script setup lang="ts">
import { useRouteStore } from '@/stores/modules/route.ts'
import { useNavStore } from '@/stores/modules/navStore.ts'
import { ElMenuItem } from "element-plus";
import type {RouteRecordRaw} from "vue-router";


const routeStore = useRouteStore();
const navStore = useNavStore();

const routes: RouteRecordRaw[] = routeStore.getHomeRoute();
const { isMobile, activeRoute, navigateTo } = navStore;

</script>


<style scoped>
/* 为桌面导航菜单添加样式，使其水平居中显示 */
.desktop-nav {
  display: flex;
  justify-content: center;
}
</style>


