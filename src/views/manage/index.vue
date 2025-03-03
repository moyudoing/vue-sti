<template>
  <div>
    <!-- 表格组件 -->
    <el-table
        :data="orders"
        style="width: 100%"
        border
        :empty-text="tableEmptyText"
    >
      <!-- 颜色列 -->
      <el-table-column prop="form.selectedColor" label="颜色" width="120">
        <template #cell="scope">
          <div
              :style="{
              backgroundColor: scope.row.form.selectedColor,
              width: '20px',
              height: '20px',
              display: 'inline-block',
              marginRight: '5px',
              borderRadius: '4px'
            }"
          ></div>
          {{ scope.row.form.selectedColor }}
        </template>
      </el-table-column>
      <!-- 大球数量列 -->
      <el-table-column prop="form.largeBallCount" label="大球数量" width="120"></el-table-column>
      <!-- 小球数量列 -->
      <el-table-column prop="form.smallBallCount" label="小球数量" width="120"></el-table-column>
      <!-- 仓位信息列 -->
      <el-table-column prop="form.selectedPosition" label="仓位信息" width="120"></el-table-column>
      <!-- 下单时间列 -->
      <el-table-column prop="time" label="下单时间" width="180">
        <template #cell="scope">
          {{ formatTime(scope.row.time) }}
        </template>
      </el-table-column>
      <!-- 用户名列 -->
      <el-table-column prop="username" label="用户名" width="120"></el-table-column>
      <!-- 用户 ID 列 -->
      <el-table-column prop="user_id" label="用户 ID" width="120"></el-table-column>
      <!-- 是否同意列 -->
      <el-table-column prop="is_agree" label="是否同意" width="120">
        <template #cell="scope">
          <el-switch
              v-model="scope.row.is_agree"
              @change="handleAgreeChange(scope.row)"
          ></el-switch>
        </template>
      </el-table-column>
      <!-- 操作列 -->
      <el-table-column label="操作" width="120">
        <template #cell="scope">
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { useManageStore } from "@/stores/modules/manage.ts";
import { ref, computed } from "vue";
import { format } from "date-fns";

// 获取管理仓库实例
const manageStore = useManageStore();
// 使用计算属性来获取订单数据，确保响应式更新
const orders = computed(() => manageStore.orders);
// 表格为空时的提示文本
const tableEmptyText = ref("暂无订单数据");

// 格式化时间戳为可读的日期时间格式
const formatTime = (timestamp: number) => {
  return format(new Date(timestamp), "yyyy-MM-dd HH:mm:ss");
};

// 处理是否同意状态改变的事件
const handleAgreeChange = (order: any) => {
  // 这里可以添加更新订单状态到后端的逻辑
  console.log("订单是否同意状态已改变", order);
};

// 处理删除订单的事件
const handleDelete = (order: any) => {
  const confirmDelete = window.confirm("确定要删除该订单吗？");
  if (confirmDelete) {
    const index = manageStore.orders.findIndex((o) => o.user_id === order.user_id);
    if (index!== -1) {
      manageStore.orders.splice(index, 1);
      console.log("订单已删除", order);
    }
  }
};
</script>

<style scoped>
.el-table {
  margin-top: 20px;
}
</style>
