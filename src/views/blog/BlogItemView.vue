<template>
  <div>
    <!-- <p>{{ $route.params.slug }}</p> -->
    <!-- <p>{{ props.slug }}</p> -->

    <div
      class="hero rounded-2xl h-96"
      :style="`background-image: url(${data.heroImageUrl}) `"
    >
      <div class="hero-overlay rounded-2xl bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-3xl">
          <h1 class="mb-5 text-5xl font-bold">{{ data.title }}</h1>
          <p v-if="data?.createdDate" class="text-md text-right italic">
            Published on: {{ data.createdDate.toDateString() }}
          </p>
          <p
            v-if="
              data.createdDate.toDateString() !=
              data.modifiedDate.toDateString()
            "
            class="text-md text-right italic"
          >
            Updated on: {{ data.modifiedDate.toDateString() }}
          </p>
        </div>
      </div>
    </div>
    <BaseMarkdownVue
      class="py-6 px-10 text-center italic"
      :markdown="data.abstract"
    />
    <div class="divider"></div>
    <BaseMarkdownVue class="px-6 pt-6" :markdown="data.bodyText" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { getPostBySlug } from "@/plugins/contentful.js";
import BaseMarkdownVue from "../../components/Base/BaseMarkdown.vue";

const props = defineProps(["slug"]);

let data = ref({
  title: "temp",
  createdDate: new Date(),
  modifiedDate: new Date(),
  abstract: "temp",
  bodyText: "# Temp",
});

getPostBySlug(props.slug)
  .then((value) => {
    data.value = value[0];
  })
  .catch((error) => console.log(error));
</script>

<!-- 
Image picture -> Opacity -> Text (Title in Center, Published Date in lower right)
Divider
Abstract
Divider
Content

 -->
