<template>
  <div
    class="bg-stone-200 rounded-3xl p-4 flex justify-center max-w-max border-stone-300 border-2"
  >
    <!-- <form
      method="POST"
      action="https://forms.reform.app/headless/i3kH4y/subscription-form/1cdle7/submissions"
    >
      <div>
        <label for="3fa4613c-c3b4-4eaf-964a-5317e5cd2a26" class="label">
          <span class="label-text text-lg font-bold">Join my Newsletter!</span>
        </label>
        <div
          class="flex align-center justify-center flex-wrap gap-1 w-min-fit max-w-full"
        >
          <input
            type="email"
            id="3fa4613c-c3b4-4eaf-964a-5317e5cd2a26"
            name="answers[3fa4613c-c3b4-4eaf-964a-5317e5cd2a26]"
            placeholder="jane@example.com"
            required
            class="input input-bordered rounded-2xl sm:w-96"
          />
          <button type="submit" class="rounded-2xl mr-1 btn btn-primary">
            Subscribe
          </button>
        </div>
        <p class="text-sm pt-1">
          Big things are on the horizon! Sign-up to keep in touch!
        </p>
      </div>
    </form> -->
    <div id="my-reform"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  let ckeditor = document.createElement("script");
  ckeditor.setAttribute("src", "https://embed.reform.app/v1/embed.js");
  ckeditor.setAttribute("id", "reform-script");
  ckeditor.setAttribute("async", "true");
  document.head.appendChild(ckeditor);

  window.Reform =
    window.Reform ||
    function () {
      (Reform.q = Reform.q || []).push(arguments);
    };
  Reform("init", {
    url: "https://forms.reform.app/i3kH4y/subscription-form/1cdle7",
    target: "#my-reform",
    background: "transparent",
  });
});

// * TODO: Emit a form completed response (this should trigger closing the modal that contains the form, and replacing it with a )
</script>
