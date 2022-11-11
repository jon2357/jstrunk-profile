<template>
  <div class="tooltip tooltip-info overflow-visible" :data-tip="props.tooltip">
    <button
      class="btn btn-primary h-[3.5rem] min-w-[3.5rem] rounded-full"
      @click="buttonClick(props.fromClick)"
      :disabled="isDisabled"
    >
      <font-awesome-icon class="text-xl" :icon="`${props.icon}`" />
      <p class="empty:hidden ml-2">{{ props.text }}</p>
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "fa-solid fa-info-circle",
  },
  tooltip: {
    type: String,
    default: "This is what this button does!!",
  },
  text: {
    type: String,
    default: null,
  },
  fromClick: {
    type: [String, Boolean, Number],
    default: true,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["btnClick"]);

const buttonClick = (value) => {
  // console.log("btn", value);
  emit("btnClick", value);
};
</script>
