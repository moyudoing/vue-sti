<template>
  <div class="home-page">
    <HeroSection />
    <ProductShowcase />
    <FeatureSection />
    <NewsSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/Home/HeroSection.vue'
import ProductShowcase from '@/components/Home/ProductShowcase.vue'
import FeatureSection from '@/components/Home/FeatureSection.vue'
import NewsSection from '@/components/Home/NewsSection.vue'
</script>
