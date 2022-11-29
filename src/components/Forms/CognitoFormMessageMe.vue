<template>
  <div class="bg-base-200 rounded-3xl p-4 max-w-max border-base-300 border-2">
    <div
      class="flex align-center justify-center flex-wrap gap-1 w-min-fit max-w-full"
    >
      <iframe
        src="https://www.cognitoforms.com/f/SNIHbAq7lECMfAxcmXBidA/1"
        style="border: 0; width: 100%"
        height="550px"
      ></iframe>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  let ckeditor = document.createElement("script");
  ckeditor.setAttribute("src", "https://www.cognitoforms.com/f/iframe.js");
  document.head.appendChild(ckeditor);
});
// * TODO: Emit a form completed response (this should trigger closing the modal that contains the form, and replacing it with a )
</script>
