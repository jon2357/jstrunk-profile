<template>
  <article class="prose max-w-none" v-html="markDown"></article>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { marked } from "marked";

const fileData = ref();
const markDown = ref();

async function fetchData() {
  //LegalTermsOfUse.md, siteInfo.json
  const response = await fetch("/LegalPrivacyPolicy.md");
  fileData.value = await response.text();
  markDown.value = await marked(fileData.value);
}

onMounted(() => {
  fetchData(); // <div>
});
</script>
