<template>
  <nav class="breadcrumb">
    <ol>
      <li v-for="(item, index) in items" :key="item.path">
        <router-link
            v-if="index < items.length - 1"
            :to="item.path"
        >
          {{ item.meta.title }}
        </router-link>
        <span v-else>
          {{ item.meta.title }}
        </span>
        <span v-if="index < items.length - 1" class="separator">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const items = computed(() => {
  return route.matched
      .filter(r => r.meta.breadcrumb !== false && r.meta.title)
      .map(r => ({
        path: r.path,
        meta: r.meta
      }))
})
</script>

<style lang="scss" scoped>
.breadcrumb {
  ol {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;

      a {
        color: #3498db;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }

      .separator {
        margin: 0 8px;
        color: #95a5a6;
      }

      &:last-child span {
        color: #2c3e50;
        font-weight: 500;
      }
    }
  }
}
</style>
