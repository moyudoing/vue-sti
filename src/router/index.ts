// @/router/index.ts
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import SelectRoute from "./modules/select.ts";
import LoginView from "@/views/login/LoginView.vue";

// 定义主路由布局组件
const HomeLayout = () => import('@/layout/home/index.vue').catch(error => {
    console.error('Failed to load home layout component:', error);
    return () => ({ template: '<div>Failed to load home layout</div>' });
});

// 定义子路由组件
const HomeView = () => import('@/views/home/HomeView.vue').catch(error => {
    console.error('Failed to load home view component:', error);
    return () => ({ template: '<div>Failed to load home view</div>' });
});

// 定义路由配置
export const routes: RouteRecordRaw[] = [
    {
        // 根路径重定向到首页
        path: '/',
        redirect: '/home',
        component: HomeLayout,
        children: [
            {
                path: 'home',
                name: 'homeView',
                component: HomeView,
                meta: {
                    title: '首页',
                    icon: 'home',
                    isShow: true,
                }
            },
        ]
    },
    {
        path: '/login',
        component: LoginView,
        meta: {
            title: '登录',
            isShow: true,
        },
    },
    SelectRoute
];

// 创建路由实例
const mainRouter = createRouter({
    // 使用哈希路由模式，并设置基础路径
    history: createWebHashHistory('/vue-sti/'),
    routes
});

// 导出路由实例
export default mainRouter;
