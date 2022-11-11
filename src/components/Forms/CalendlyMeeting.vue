<template>
  <div
    class="bg-base-200 rounded-3xl p-4 flex justify-center content-center max-w-max border-base-300 border-2"
  >
    <!-- Calendly inline widget begin -->
    <div
      class="calendly-inline-widget sm:w-96"
      data-url="https://calendly.com/jonstrunk/15min"
      style="height: 820px"
    ></div>
    <!-- <script
      type="text/javascript"
      src="https://assets.calendly.com/assets/external/widget.js"
      async
    ></script> -->
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
  document.head.appendChild(ckeditor);
});
// * TODO: Emit a form completed response (this should trigger closing the modal that contains the form, and replacing it with a )
</script>
