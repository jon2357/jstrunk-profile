<template>
  <div
    class="card max-w-sm h-[30rem] bg-base-100 shadow-lg shrink rounded-2xl hover:shadow-2xl ease-in-out"
  >
    <figure>
      <img
        class="object-cover aspect-video"
        :src="`${props.imageUrl}`"
        :alt="`${props.imageAlt}`"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.title }}</h2>
      <p>{{ props.descShort }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" @click="buttonClick(props.btnLink)">
          {{ props.btnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "This is the title",
  },
  descShort: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempors incididunt --char100",
  },
  imageUrl: {
    type: String,
    default: "https://placeimg.com/400/225/arch",
  },
  imageAlt: {
    type: String,
    default: "undefined",
  },
  btnText: {
    type: String,
    default: "Get Started",
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
