<template>
  <!-- Insert Hero section with an image and a long description -->
  <section id="hero">
    <BaseHeroSection
      :title="specializations.title"
      :description="specializations.description"
      :imageUrl="specializations.imageUrl"
      :imageAlt="specializations.imageAlt"
    />
  </section>

  <div v-for="(item, index) in inputData" :key="index">
    <div v-if="index" class="divider"></div>
    <SpecializationCard
      :anchor="item.anchor"
      :title="item.title"
      :description="item.description"
      :imageUrl="item.imageUrl"
      :imageAlt="item.imageAlt"
      :externalRoutes="item.externalConnections"
      :internalRoutes="ctaRoutes"
    />
  </div>
</template>

<script setup>
import { specializations, ctaRoutes } from "@/data";
import BaseHeroSection from "../components/Base/BaseHeroSection.vue";
import SpecializationCard from "@/components/Specialization/SpecializationCard.vue";

const inputData = specializations.entries;
</script>
