import { createRouter, createWebHashHistory } from 'vue-router';
import SelectRoute from "./modules/select.ts"

// 定义主路由布局组件
const HomeLayout = () => import('@/layout/home/index.vue').
catch(error => {
    console.error('Failed to load home layout component:', error);
});

// 定义子路由组件
const HomeView = () => import('@/views/home/HomeView.vue').
catch(error => {
    console.error('Failed to load home view component:', error);
});


// 定义路由配置
const routes = [
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
                    icon: 'home'
                }
            },
        ]
    },
    SelectRoute
];

// 创建路由实例
const mainRouter = createRouter({
    // 使用哈希路由模式，并设置基础路径
    history: createWebHashHistory('/jy_yyf/'),
    routes
});

// 导出路由实例
export default mainRouter;
