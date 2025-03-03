<template>
  <div class="vertical-table">
    <!-- 表头部分 -->
    <div class="table-header">
      <div class="table-cell">项目</div>
      <div class="table-cell">选项</div>
    </div>
    <!-- 表格内容部分 -->
    <div class="table-row" v-for="(value, key) in formData" :key="key">
      <div class="table-cell">{{ getLabel(key) }}</div>
      <div class="table-cell">{{ value }}</div>
    </div>
  </div>

  <div class="confirm-order">
    <el-button round @click="confirmOrder">确认订单</el-button>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { useSelectStore } from "@/stores/modules/select.ts";
import { useUserStore } from "@/stores/modules/user.ts";
import router from "@/router";

// 获取 Pinia 存储实例
const selectStore = useSelectStore();
// 使用 toRefs 确保响应式
const { formData } = toRefs(selectStore);

const userStore = useUserStore();

const confirmOrder = () => {
  if (!userStore.isLoggedIn) {
    // 用户未登录，跳转到登录页面
    router.push({ name: 'login' });
  } else {
    // 用户已登录，处理订单确认逻辑
    console.log('订单已确认');
    // 这里可以添加更多处理订单的代码，如发送请求等
  }
};

// 根据键名返回对应的标签名
const getLabel = (key: string) => {
  switch (key) {
    case "selectedColor":
      return "颜色";
    case "largeBallCount":
      return "大球";
    case "smallBallCount":
      return "小球";
    case "selectedPosition":
      return "仓位";
    default:
      return key;
  }
};
</script>

<style scoped>
.vertical-table {
  display: flex;
  flex-direction: column;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  margin-top: 20px;
}

.table-header {
  display: flex;
  background-color: #f5f7fa;
  border-bottom: 1px solid #ebeef5;
}

.table-row {
  display: flex;
  border-bottom: 1px solid #ebeef5;
}

.table-cell {
  flex: 1;
  padding: 12px;
  text-align: left;
}

.table-row:last-child {
  border-bottom: none;
}
</style>
