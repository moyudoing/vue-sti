<template>
  <div class="diy-config">
    <h2>颜色配置</h2>
    <div class="color-picker">
      <div
          v-for="color in colors"
          :key="color"
          class="color-item"
          :style="{ backgroundColor: color }"
          @click="selectColor(color)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const colors = ref([
  '#FF6B6B', '#4ECDC4', '#45B7D1',
  '#96CEB4', '#FFEEAD', '#FF9999'
])

const selectColor = (color: string) => {
  console.log('Selected color:', color)
  // 这里可以添加颜色选择逻辑
}
</script>

<style lang="scss" scoped>
.color-picker {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 16px;
  padding: 20px;
  max-width: 600px;

  .color-item {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
    border: 2px solid transparent;

    &:hover {
      transform: scale(1.1);
      border-color: #3498db;
    }
  }
}
</style>
