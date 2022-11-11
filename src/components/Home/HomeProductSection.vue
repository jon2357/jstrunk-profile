<template>
  <div class="bg-base-200 py-12 px-1 md:px-6 rounded-2xl">
    <h2 class="text-4xl font-bold text-center pb-12">{{ props.title }}</h2>
    <div class="gap-6 flex flex-wrap justify-around">
      <div v-for="item in props.productList" :key="item.name">
        <div class="">
          <HomeProductCard
            :title="item.title"
            :descShort="item.descShort"
            :imageUrl="item.imageUrl"
            :imageAlt="item.imageAlt"
            :btnText="item.buttonText"
            :btnLink="item.buttonLink"
            @btnClick="buttonClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeProductCard from "./HomeProductCard.vue";

const props = defineProps({
  title: {
    type: String,
    default: "General Title",
  },
  productList: {
    type: Array,
    default: [
      {
        title: "Product 1",
        descShort:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempors incididunt --char100",
        imageUrl: "https://placeimg.com/400/225/animals",
        imageAlt: "animals",
        buttonText: "Do Stuff",
      },
      {
        title: "Product 2",
        descShort:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempors incididunt --char100",
        imageUrl: "glenn-carstens-peters-npxXWgQ33ZQ-unsplash-mod-400x225.png",
        imageAlt: "fixed IMage",
        buttonText: "Do More",
      },
    ],
  },
});

const emit = defineEmits(["btnClick"]);

const buttonClick = (value) => {
  emit("btnClick", value);
};

// Take in a list of Objects with a Title, short description, image, button text, button
</script>
