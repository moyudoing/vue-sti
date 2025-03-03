import { defineStore } from 'pinia';
import type { FormData } from './select';

// 定义订单接口
export interface Order {
    form: FormData;
    time: number;
    username: string;
    user_id: number;
    is_agree: boolean;
}

// 定义 Pinia 存储
export const useManageStore = defineStore('manage', {
    // 定义状态
    state: () => ({
        orders: [] as Array<Order> // 初始化 orders 状态为一个空的 Order 数组
    }),
    // 可以在这里添加 actions、getters 等
    actions: {
        // 示例 action：添加订单
        addOrder(newOrder: Order) {
            this.orders.push(newOrder);
        }
    },
    getters: {
        // 示例 getter：获取订单数量
        orderCount(): number {
            return this.orders.length;
        }
    }
});
