<template>
  <div class="bg-base-200 rounded-2xl m-2 p-2">
    <h2 class="text-4xl font-bold text-center p-6">{{ props.title }}</h2>

    <div
      v-for="phase in props.timeline"
      :key="phase.phase"
      class="grid grid-cols-12 gap-4 m-2 p-2 mb-5 bg-base-300 rounded-2xl"
    >
      <!-- Left (top) Div on small Size Screens-->
      <div class="md:hidden grid col-span-11 bg-accent rounded-r-full">
        <p class="w-max text-3xl text-center">
          <font-awesome-icon icon="fa-solid fa-angles-right" class="mr-5" />
          {{ phase.phase }}
          <font-awesome-icon icon="fa-solid fa-angles-right" class="ml-5" />
        </p>
      </div>

      <!-- Left side Div on Medium Size Screens and up-->
      <div
        class="hidden md:grid col-span-1 grid place-content-center bg-accent rounded-t-full my-2 ml-2"
      >
        <div class="rotate-[270deg] text-center">
          <p class="w-max text-3xl">
            <font-awesome-icon icon="fa-solid fa-angles-right" class="mr-5" />
            {{ phase.phase }}
            <font-awesome-icon icon="fa-solid fa-angles-right" class="ml-5" />
          </p>
        </div>
      </div>
      <!-- Entry Group Div -->
      <div class="col-span-12 md:col-span-11 md:m-3">
        <div v-for="item in phase.items" :key="item.description" class="m-6">
          <AboutTimeLineCard
            :title="item.description"
            :imageUrl="item.imageUrl"
            :imageAlt="item.imageAlt"
            :text="item.highlightList"
            :yearEnd="item.yearEnd"
            :yearStart="item.yearStart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutTimeLineCard from "./AboutTimeLineCard.vue";

const props = defineProps({
  title: {
    type: String,
    default: "The Timeline Title",
  },
  timeline: {
    type: Array,
  },
});
</script>
