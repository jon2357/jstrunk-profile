<template>
  <div
    class="card sm:card-side bg-base-100 rounded-2xl shadow-lg p-1 md:p-3 hover:shadow-2xl"
  >
    <figure>
      <div class="relative bg-base-300 rounded-full">
        <p
          v-if="props.yearEnd"
          class="absolute top-1 left-1/2 -translate-x-1/2 bg-gray-800 opacity-70 text-white rounded-full px-3"
        >
          {{ props.yearEnd.toString() }}
        </p>
        <p
          v-if="props.yearStart"
          class="absolute bottom-1 left-1/2 -translate-x-1/2 bg-gray-800 opacity-70 text-white rounded-full px-3"
        >
          {{ props.yearStart.toString() }}
        </p>
        <img
          class="aspect-square w-40 sm:max-w-xs object-cover rounded-full"
          :src="`${props.imageUrl}`"
          :alt="`${props.imageAlt}`"
        />
      </div>
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.title }}</h2>
      <ul class="pl-3">
        <div v-if="Array.isArray(props.text)" class="py-1">
          <li class="pb-1" v-for="item1 in props.text" :key="item1">
            {{ item1 }}
          </li>
        </div>
        <p v-else class="pb-1">{{ props.text }}</p>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "This is the Card Title!!!!",
  },
  imageUrl: {
    type: String,
    default: "https://placeimg.com/800/300/animals",
  },
  imageAlt: {
    type: String,
    default: "Image Alt Text",
  },
  text: {
    type: [Array, String],
    default: ["Line Item 1", "Line Item 2"],
  },
  yearStart: {
    type: Number,
    default: 2020,
  },
  yearEnd: {
    type: Number,
    default: 2022,
  },
});
</script>
