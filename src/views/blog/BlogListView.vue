<template>
  <div class="bg-base-200 py-12 px-1 md:px-6 rounded-2xl">
    <h2 class="text-4xl font-bold text-center pb-12">
      Value in the Written Word: Blog Posts, Articles, & Guides
    </h2>
    <div class="gap-6 flex flex-wrap justify-around">
      <div v-for="item in showData" :key="item.name">
        <RouterLink :to="{ name: 'blogPost', params: { slug: item.slug } }">
          <BlogCard
            :title="item.title"
            :descShort="item.shortDesc"
            :imageUrl="item.heroImageUrl"
            :imageAlt="item.heroImageTitle"
            btnText="Read More"
            @btnClick="buttonClick(item)"
        /></RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { getBlog } from "@/plugins/contentful";
import BlogCard from "@/components/Blog/BlogCard.vue";
import _orderBy from "lodash/orderBy";

// Blog Actions
let data = ref([]);

getBlog()
  .then((value) => {
    data.value = _orderBy(value, "createdDate", "desc");
  })
  .catch((error) => console.log(error));

// Blog Computed
// a computed ref
const showData = computed(() => {
  return data.value.map((el) => {
    el.shortDesc = (el.abstract || el.bodyText).slice(0, 150);
    return el;
  });
});

// Button Methods
const emit = defineEmits(["btnClick"]);

const buttonClick = (value) => {
  emit("btnClick", value);
};
</script>
