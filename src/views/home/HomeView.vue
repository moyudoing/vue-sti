<template>
  <div class="home-page">
    <Banner />
    <HeroSection />
    <ProductShowcase />
    <NewsSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/Home/HeroSection.vue'
import ProductShowcase from '@/components/Home/ProductShowcase.vue'
import Banner from '@/components/Home/Banner.vue'
import NewsSection from '@/components/Home/NewsSection.vue'

</script>

<style scoped>
.home-page{
  display: grid;
}


</style>
