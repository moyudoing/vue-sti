<template>
  <div class="home-page">
    <Banner />
    <ProductFeature/>
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
import ProductFeature from "@/components/Home/ProductFeature.vue";

</script>

<style scoped>
.home-page{
  display: grid;
}


</style>
