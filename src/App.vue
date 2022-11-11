<script setup>
import { RouterView } from "vue-router";
import FooterBar from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <div data-theme="corporate">
    <TheHeader />
    <main>
      <router-view />
    </main>

    <FooterBar />
  </div>
</template>
