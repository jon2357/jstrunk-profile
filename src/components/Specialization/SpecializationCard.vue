<template>
  <section :id="props.anchor">
    <div class="card md:card-side p-6">
      <!-- Side Image -->
      <figure>
        <img class="rounded-2xl" :src="props.imageUrl" :alt="props.imageAlt" />
      </figure>
      <!-- Side Content -->
      <div class="card-body">
        <h2 class="card-title text-4xl font-bold">{{ props.title }}</h2>
        <div v-if="Array.isArray(props.description)" class="py-6">
          <p class="py-2" v-for="item in props.description" :key="item">
            {{ item }}
          </p>
        </div>
        <div v-else>
          <p class="py-6">{{ item }}</p>
        </div>
        <div class="flex justify-between flex-wrap">
          <!-- External Links -->

          <div
            class="flex gap-2 justify-between place-items-center my-1 flex-wrap"
          >
            <a
              v-for="el in props.externalRoutes"
              :key="el.text"
              class="btn btn-outline btn-secondary"
              :href="el.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ el.text }}
            </a>
          </div>

          <!-- CTA Button Group -->
          <div class="flex justify-end my-1">
            <TheCTAGroup />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import TheCTAGroup from "@/components/TheCTAGroup.vue";
const props = defineProps({
  anchor: {
    type: String,
    default: "test-section-id",
  },
  title: {
    type: String,
    default: "This is the title",
  },
  description: {
    type: [String, Array],
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempors incididunt --char100",
  },
  imageUrl: {
    type: String,
    default: "https://placeimg.com/400/400/arch",
  },
  imageAlt: {
    type: String,
    default: "undefined",
  },
  externalRoutes: {
    type: Array,
  },
});
</script>

<!-- 
    import SpecializationCard from '@/components/Specialization/SpecializationCard.vue'

    <SpecializationCard
    :anchor=""
    :title=""
    :description=""
    :imageUrl=""
    :imageAlt=""
    :externalRoutes=""
    :internalRoutes="" 
    />
 -->
