// @/router/modules/manage.ts
import type { RouteRecordRaw } from "vue-router";

const SelectLayout = () => import('@/layout/selcet/index.vue').catch(error => {
    console.error('Failed to load select layout component:', error);
    return () => ({ template: '<div>Failed to load layout</div>' });
});

const routes: RouteRecordRaw = {
    path: '/manage',
    name: 'selectView',
    redirect: '/manage/home',
    component: SelectLayout,
    meta: {
        title: "管理订单",
        icon: 'home',
        isShow: true,
    },
    children: [
        {
            path: 'home',
            name: 'selectHomeView',
            component: ()=>import('@/views/manage/index.vue'),
            meta: {
                title: "首页",
                icon: "home"
            }
        },

    ]
};

export default routes;
