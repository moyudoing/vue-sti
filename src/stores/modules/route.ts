import type { RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia';
import { routes } from '@/router'; // 假设路由数组在 @/router/index 中通过 routes 导出

export const useRouteStore = defineStore(
    // 唯一ID
    'route',
    () => {
        // 定义 getHomeRoute 函数，返回首页路由数组
        function getHomeRoute(): RouteRecordRaw[] {
            const homeRoutes: RouteRecordRaw[] = [];

            // 递归遍历路由配置，查找首页路由
            function findHomeRoutes(routes: RouteRecordRaw[]) {
                for (const route of routes) {
                    if (route.meta?.isShow) {
                        homeRoutes.push(route);
                    }
                    if (route.children) {
                        findHomeRoutes(route.children);
                    }
                }
            }

            findHomeRoutes(routes);
            return homeRoutes;
        }

        return {
            getHomeRoute,
        };
    }
);

export default {
    useRouteStore
};
