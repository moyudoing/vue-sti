import type {RouteRecordRaw} from "vue-router";

const SelectLayout = () => import('@/layout/selcet/index.vue').
catch(error => {
    console.error('Failed to load select layout component:', error);
});

// 定义子路由组件
const HomeSelectView = () => import('@/views/select/modules/HomeSelectView.vue').
catch(error => {
    console.error('Failed to load home select view component:', error);
});
const ColorSelectView = () => import('@/views/select/modules/ColorSelectView.vue').
catch(error => {
    console.error('Failed to load color select view component:', error);
});

const routes: RouteRecordRaw = {
        path: '/select',
        name: 'selectView',
        redirect: '/select/home',
        component: SelectLayout,
        meta: {
        title: "立即选择",
            icon: 'home'
        },
        children: [
            {
                path: 'home',
                name: 'selectHomeView',
                component: HomeSelectView,
                meta: {
                    title: "首页",
                    icon: "home"
                }
            },
            {
                path: 'color',
                name: 'colorView',
                component: ColorSelectView,
                meta: {
                    title: "选择颜色",
                    icon: "color"
                }
            },
        ]
}

export default routes;
