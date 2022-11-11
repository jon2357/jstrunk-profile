<script setup>
import { internalRouteClick } from "@/composables/buttonClick";
import { heroSection, productSection } from "@/data";
import HomeProductSection from "../components/Home/HomeProductSection.vue";
import BaseHeroSection from "../components/Base/BaseHeroSection.vue";
</script>

<template>
  <main>
    <section id="hero">
      <BaseHeroSection
        :title="heroSection.title"
        :description="heroSection.descShort"
        :imageUrl="heroSection.imageUrl"
        :btnText="heroSection.buttonText"
        :btnLink="heroSection.buttonLink"
        @btnClick="internalRouteClick"
      />
    </section>
    <div class="divider"></div>
    <section id="Product">
      <HomeProductSection
        :title="'Areas of Expertise'"
        :productList="productSection"
        @btnClick="internalRouteClick"
      />
    </section>
  </main>
</template>
