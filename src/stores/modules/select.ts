import { defineStore } from 'pinia';

// 定义表单数据的类型
export interface FormData {
    selectedColor: string;
    largeBallCount: number;
    smallBallCount: number;
    selectedPosition: string;
}

// 使用 defineStore 定义一个名为 formStore 的存储
export const useSelectStore = defineStore('selectStore', {
    state: (): { formData: FormData } => ({
        formData: {
            selectedColor: '',
            largeBallCount: 0,
            smallBallCount: 0,
            selectedPosition: ''
        }
    }),
    actions: {
        // 定义一个更新表单数据的动作
        updateFormData(data: FormData) {
            this.formData = data;
        }
    }
});
