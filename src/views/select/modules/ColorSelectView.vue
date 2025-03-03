<template>
  <el-form :model="formData" ref="formRef" label-width="120px">
    <!-- 颜色选择部分 -->
    <el-form-item label="颜色选择">
      <template #default>
        <el-radio-group v-model="formData.selectedColor">
          <el-radio
              v-for="(option, index) in colorOption"
              :key="index"
              :label="option.color">
            <!-- 显示色块 -->
            <div class="color-block" :style="{ backgroundColor: option.color }"></div>
            <!-- 显示颜色名称 -->
            {{ option.name }}
          </el-radio>
        </el-radio-group>
      </template>
    </el-form-item>

    <!-- 大球数量输入部分 -->
    <el-form-item label="大球数量" :rules="[{ validator: validateNonNegativeNumber, trigger: 'blur' }]">
      <el-input v-model.number="formData.largeBallCount" placeholder="请输入内容"></el-input>
    </el-form-item>

    <!-- 小球数量输入部分 -->
    <el-form-item label="小球数量" :rules="[{ validator: validateNonNegativeNumber, trigger: 'blur' }]">
      <el-input v-model.number="formData.smallBallCount" placeholder="请输入内容"></el-input>
    </el-form-item>

    <!-- 仓位信息选择部分 -->
    <el-form-item label="仓位信息">
      <el-select v-model="formData.selectedPosition" placeholder="请选择">
        <el-option
            v-for="item in positionOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>

    <!-- 提交按钮 -->
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { ElRadio, ElOption, ElSelect, ElInput, ElForm, ElRadioGroup,
  ElFormItem, ElButton, ElMessage } from 'element-plus';
import type { FormInstance } from 'element-plus';
import { useSelectStore } from '@/stores/modules/select';

// 获取 formStore 实例
const selectStore = useSelectStore();
const { formData } = toRefs(selectStore); // 使用 toRefs 确保响应式

// 表单引用
const formRef = ref<FormInstance>();

// 颜色选择相关
interface ColorOption {
  color: string;
  name: string;
}
const colorOption: ColorOption[] = [
  {
    color: "#770f0f",
    name: "暗红色"
  },
  {
    color: "#fff",
    name: "白色"
  },
  {
    color: "#000",
    name: "黑色"
  }
];


// 仓位信息选择相关
interface PositionOption {
  value: string;
  label: string;
}
const positionOptions: PositionOption[] = [
  { value: 'position1', label: '仓位1' },
  { value: 'position2', label: '仓位2' },
  { value: 'position3', label: '仓位3' }
];

// 输入验证函数
const validateNonNegativeNumber = (rule: { max?: number }, value: number, callback: (error?: string) => void) => {
  if (isNaN(value) || value < 0) {
    callback('必须为非负数字');
  } else if (rule.max!== undefined && value > rule.max) {
    callback(`不能超过 ${rule.max}`);
  } else {
    callback();
  }
};

// 提交表单函数
const submitForm = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 将表单数据更新到 Pinia 存储中
      selectStore.updateFormData({ ...formData.value });
      console.log('表单提交成功，存储中的表单数据：', selectStore.formData);
      // 显示提交成功的提示
      ElMessage.success('表单提交成功');
      // 这里可以添加表单提交后的逻辑，如发送请求等
    } else {
      console.log('表单验证失败');
    }
  });
};
</script>

<style lang="scss" scoped>
.color-block {
  width: 80px;
  height: 80px;
  display: inline-block;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* 可以考虑添加选中状态的样式 */
.el-radio.is-checked .color-block {
  border-color: #409eff;
}
</style>
