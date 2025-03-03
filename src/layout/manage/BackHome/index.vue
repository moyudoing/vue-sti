<template>
  <div class="backHome">
    <!-- 点击按钮触发返回根目录 home 路由的操作 -->
    <button class="menu-item"
            :class="{ active: isActiveRoute('home') }"
            @click="goToHome">返回首页</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

// 获取路由实例和当前路由信息
const router = useRouter();
const currentRoute = useRoute();

// 判断是否为激活路由的函数
const isActiveRoute = (routeName: string) => {
  return currentRoute.name === routeName;
};

// 导航到根目录 home 路由的函数
const goToHome = () => {
  router.push({ name: 'home' });
};
</script>

<style scoped>
.backHome {
  color: #150909;
  display: flex;
  justify-content: left; /* 水平居中 */
}

/* 菜单按钮样式 */
.menu-item {
  background-color: #007BFF; /* 背景颜色 */
  color: white; /* 文字颜色 */
  border: none; /* 去除边框 */
  border-radius: 25px; /* 圆角 */
  padding: 12px 24px; /* 内边距 */
  font-size: 16px; /* 字体大小 */
  cursor: pointer; /* 鼠标指针样式 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  transition: all 0.3s ease; /* 过渡效果 */
}

/* 鼠标悬停时的样式 */
.menu-item:hover {
  background-color: #0056b3; /* 悬停时的背景颜色 */
  transform: translateY(-2px); /* 向上移动 2px */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* 悬停时的阴影效果 */
}

/* 激活状态的样式 */
.menu-item.active {
  background-color: #28a745; /* 激活时的背景颜色 */
}
</style>
