<template>
  <div class="pb-1"></div>
  <footer class="footer mt-1 p-3 bg-neutral text-neutral-content rounded-2xl">
    <div class="items-center grid-flow-col">
      <img class="w-15" :src="siteInfo.logo" />
      <p>
        {{ siteInfo.title }}<br />
        <a :href="`tel:${siteInfo.phone}`"
          ><font-awesome-icon class="mr-2" icon="fa-solid fa-phone" />{{
            formatTelephone(siteInfo.phone)
          }} </a
        ><br />
        <a :href="`mailto:${siteInfo.email}`"
          ><font-awesome-icon class="mr-2" icon="fa-solid fa-envelope" />{{
            siteInfo.email
          }}</a
        >
      </p>
    </div>
    <div class="md:place-self-center md:justify-self-center">
      <div class="grid grid-flow-col gap-4 text-3xl">
        <a
          :href="socialMedia.linkedin.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="`${socialMedia.linkedin.icon}`"
        /></a>
        <a
          :href="socialMedia.github.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="`${socialMedia.github.icon}`"
        /></a>
        <a
          :href="socialMedia.medium.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="`${socialMedia.medium.icon}`"
        /></a>
        <a
          :href="socialMedia.twitter.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="`${socialMedia.twitter.icon}`"
        /></a>
      </div>
    </div>

    <div class="md:place-self-center md:justify-self-end">
      <p>
        Copyright © {{ date }} {{ siteInfo.title }}<br />
        <RouterLink to="terms">Terms</RouterLink> |
        <RouterLink to="privacy">Privacy Policy</RouterLink>
      </p>
    </div>
  </footer>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { formatTelephone } from "../composables/formatters";
import { siteInfo, socialMedia } from "@/data";
const date = new Date().getFullYear();
</script>
