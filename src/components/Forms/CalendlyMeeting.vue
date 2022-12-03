<template>
  <div
    class="bg-base-200 rounded-3xl p-4 max-w-max border-base-300 border-2 h-full"
  >
    <!-- Calendly inline widget begin -->
    <div
      class="calendly-inline-widget sm:w-96 h-[800px] max-h-[80vh]"
      data-url="https://calendly.com/jonstrunk/15min"
    ></div>
    <!-- style="height: 800px" -->
    <!-- Calendly inline widget end -->
  </div>
</template>
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  let ckeditor = document.createElement("script");
  ckeditor.setAttribute(
    "src",
    "https://assets.calendly.com/assets/external/widget.js"
  );
  ckeditor.setAttribute("async", "true");
  document.head.appendChild(ckeditor);
});
// * TODO: Emit a form completed response (this should trigger closing the modal that contains the form, and replacing it with a )
</script>
