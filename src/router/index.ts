import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: 'home',
                name: 'homeView',
                component: () => import('@/views/home/HomeView.vue'),
                meta: {
                    title: '首页',
                    icon: 'home'
                }
            },
        ]
    },
    {
        path: '/select',
        redirect: '/select',
    },
];

const mainRouter = createRouter({
    history: createWebHashHistory('/jy_yyf/'),
    routes
});

export default mainRouter;
