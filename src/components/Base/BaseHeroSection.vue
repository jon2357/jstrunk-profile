<script setup>
import TheCTAGroup from "@/components/TheCTAGroup.vue";
const props = defineProps({
  title: {
    type: String,
    default: "This is the title",
  },
  description: {
    type: [String, Array],
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempors incididunt --char100 dolores magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ultri --char200",
  },
  imageUrl: {
    type: String,
    default: "https://placeimg.com/800/800/arch",
  },
  imageAlt: {
    type: String,
    default: "undefined",
  },
  btnText: {
    type: String,
    default: null,
  },
  // If an Array First position is the page, second position is the section id to jump to
  btnLink: {
    type: [String, Array],
    default: null,
  },
});

const emit = defineEmits(["btnClick"]);

const buttonClick = (value) => {
  emit("btnClick", value);
};
</script>

<template>
  <div class="hero min-h-screen bg-base-200 rounded-2xl">
    <div class="hero-content columns-2 flex-col md:flex-row">
      <!-- Display Hero Image: Left Side (Top on Mobile) -->
      <div class="md:w-1/2 px-5">
        <img
          :src="`${props.imageUrl}`"
          :alt="`${props.imageAlt}`"
          class="rounded-full shadow-2xl"
        />
      </div>
      <!-- Display Hero Text: Right Side (Bottom on Mobile) -->
      <div class="md:w-1/2 px-5">
        <h1 class="text-5xl font-bold text-center">{{ props.title }}</h1>
        <div v-if="Array.isArray(props.description)" class="py-6">
          <p class="py-2" v-for="item in props.description" :key="item">
            {{ item }}
          </p>
        </div>
        <p v-else class="py-6">{{ props.description }}</p>

        <!-- Display a CTA Button if one is passed in -->
        <div class="flex justify-between items-center flex-wrap">
          <div>
            <button
              v-if="props.btnText"
              class="btn btn-primary"
              @click="buttonClick(props.btnLink)"
            >
              {{ props.btnText }}
            </button>
          </div>
          <div class="justify-end">
            <TheCTAGroup />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
