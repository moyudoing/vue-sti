<script setup lang="ts">

</script>

<template>
  <!-- 侧边导航 -->
  <div class="side-nav">
    <a href="#home">
      <div class="side-nav-item" data-target="home">
        <i class="fas fa-home"></i>
        <span class="side-nav-tooltip">回到顶部</span>
      </div>
    </a>
    <a href="#features">
      <div class="side-nav-item" data-target="features">
        <i class="fas fa-star"></i>
        <span class="side-nav-tooltip">产品特点</span>
      </div>
    </a>
    <a href="#products">
      <div class="side-nav-item" data-target="products">
        <i class="fas fa-box"></i>
        <span class="side-nav-tooltip">产品展示</span>
      </div>
    </a>
    <a href="#development">
      <div class="side-nav-item" data-target="development">
        <i class="fas fa-history"></i>
        <span class="side-nav-tooltip">研发历程</span>
      </div>
    </a>
    <a href="#team">
      <div class="side-nav-item" data-target="team">
        <i class="fas fa-users"></i>
        <span class="side-nav-tooltip">研发团队</span>
      </div>
    </a>
  </div>
</template>

<style scoped>
/* 侧边导航 */
.side-nav {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: var(--z-fixed);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.side-nav-item {
  width: 40px;
  height: 40px;
  background: var(--background-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  position: relative;
}

.side-nav-item:hover {
  transform: translateX(-5px);
  background: var(--primary-color);
  color: white;
}

.side-nav-tooltip {
  position: absolute;
  right: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  background: var(--background-color);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  white-space: nowrap;
  box-shadow: var(--shadow);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.side-nav-item:hover .side-nav-tooltip {
  opacity: 1;
  visibility: visible;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .side-nav {
    display: none;
  }
}
</style>
