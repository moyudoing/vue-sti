<template>
  <div class="demo-type">
    <el-dropdown ref="dropdownRef" trigger="hover">
      <!-- 触发元素插槽 -->
      <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          class="avatar-trigger"
      ></el-avatar>
      <!-- 下拉菜单内容插槽 -->
      <template #dropdown>
        <el-dropdown-menu class="custom-dropdown-menu">
          <el-dropdown-item @click="handleMenuItemClick('个人中心')">
            <i class="el-icon-user"></i> 个人中心
          </el-dropdown-item>
          <el-dropdown-item @click="handleMenuItemClick('设置')">
            <i class="el-icon-setting"></i> 设置
          </el-dropdown-item>
          <el-dropdown-item @click="handleMenuItemClick('退出登录')">
            <i class="el-icon-switch-button"></i> 退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus";
import { ref, onMounted, onUnmounted } from 'vue'

// 处理菜单项点击事件
const handleMenuItemClick = (item: any) => {
  console.log(`你点击了: ${item}`);
  // 这里可以添加更多业务逻辑，比如跳转到个人中心页面等
  if (item === '退出登录') {
    // 示例：退出登录逻辑
    console.log('执行退出登录操作');
  }
};

// 用于获取下拉菜单实例，明确指定类型
const dropdownRef = ref<InstanceType<typeof ElDropdown> | null>(null);

const handleScroll = () => {
  if (dropdownRef.value) {
    // 收起菜单
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
.demo-type {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-trigger {
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
  }
}

.custom-dropdown-menu {
  min-width: 150px;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: none;
  background-color: #fff;

  .el-dropdown-item {
    padding: 10px 16px;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;

    i {
      margin-right: 8px;
      color: #909399;
    }

    &:hover {
      background-color: #e4f1ff;
      color: #409eff;
    }
  }
}
</style>
