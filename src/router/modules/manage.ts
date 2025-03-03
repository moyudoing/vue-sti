// @/router/modules/manage.ts
import type { RouteRecordRaw } from "vue-router";

// 定义布局组件
const SelectLayout = () => import('@/layout/selcet/index.vue').catch(error => {
    console.error('Failed to load select layout component:', error);
    return () => ({ template: '<div>Failed to load layout</div>' });
});

// 定义子路由组件
const HomeSelectView = () => import('@/views/select/modules/HomeSelectView.vue').catch(error => {
    console.error('Failed to load home select view component:', error);
    return () => ({ template: '<div>Failed to load home view</div>' });
});
const ColorSelectView = () => import('@/views/select/modules/ColorSelectView.vue').catch(error => {
    console.error('Failed to load color select view component:', error);
    return () => ({ template: '<div>Failed to load color view</div>' });
});
const ShapeSelectView = () => import('@/views/select/CompleteSelectionView.vue').catch(error => {
    console.error('Failed to load color select view component:', error);
    return () => ({ template: '<div>Failed to load color view</div>' });
});
const LocationSelectView = () => import('@/views/select/CompleteSelectionView.vue').catch(error => {
    console.error('Failed to load home select view component:', error);
    return () => ({ template: '<div>Failed to load home view</div>' });
});
const LargeBallsSelectView = () => import('@/views/select/CompleteSelectionView.vue').catch(error => {
    console.error('Failed to load color select view component:', error);
    return () => ({ template: '<div>Failed to load color view</div>' });
});
const SmallBallsSelectView = () => import('@/views/select/CompleteSelectionView.vue').catch(error => {
    console.error('Failed to load color select view component:', error);
    return () => ({ template: '<div>Failed to load color view</div>' });
});
const CompleteSelectionView = () => import('@/views/select/CompleteSelectionView.vue').catch(error => {
    console.error('Failed to load color select view component:', error);
    return () => ({ template: '<div>Failed to load color view</div>' });
});

const routes: RouteRecordRaw = {
    path: '/select',
    name: 'selectView',
    redirect: '/select/home',
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
        {
            path: 'location',
            name: 'locationView',
            component: LocationSelectView,
            meta: {
                title: "选择仓位",
                icon: "location"
            }
        },
        {
            path: 'largeBalls',
            name: 'largeBallsView',
            component: LargeBallsSelectView,
            meta: {
                title: "选择大球数量",
                icon: "largeBalls"
            }
        },
        {
            path: 'smallBalls',
            name: 'smallBallsView',
            component: SmallBallsSelectView,
            meta: {
                title: "选择小球数量",
                icon: "smallBalls"
            }
        },
        {
            path: 'shape',
            name: 'shapeView',
            component: ShapeSelectView,
            meta: {
                title: "选择形状",
                icon: "shape"
            }
        },
        {
            path: 'completeSelection',
            name: 'completeSelectionView',
            component: CompleteSelectionView,
            meta: {
                title: "完成选择",
                icon: "completeSelection"
            }
        },

    ]
};

export default routes;
