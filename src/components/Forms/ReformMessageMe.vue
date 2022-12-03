<template>
  <div
    class="bg-stone-200 rounded-3xl p-4 flex justify-center max-w-max border-stone-300 border-2"
  >
    <!-- <form @submit.prevent>
      <div class="form-control">
        <label class="label">
          <span class="label-text text-lg font-bold">Contact Me</span>
        </label>
        <div
          class="flex flex-col align-center justify-center flex-wrap gap-1 w-min-fit max-w-full"
        >
          <label for="name" class="input-group">
            <span class="label w-24">Name:</span>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              v-model="formInfo.name"
              class="input input-bordered w-full"
            />
          </label>
          <label for="email" class="input-group">
            <span class="w-24">Email:</span>
            <input
              id="email"
              type="email"
              placeholder="username@site.com"
              v-model="formInfo.email"
              class="input input-bordered w-full"
            />
          </label>
          <label for="message" class="input-group input-group-vertical">
            <span>Message:</span>
            <textarea
              id="message"
              type="text"
              placeholder="Your message here."
              v-model="formInfo.message"
              class="textarea textarea-bordered"
            ></textarea>
          </label>

          <button
            @click="buttonSubmit(formInfo)"
            class="btn btn-primary rounded-2xl"
          >
            Submit Message
          </button>
        </div>
        <div>
          <p class="text-sm pt-1">
            Big deeds start with small conversations, let's talk about the
            future!
          </p>
        </div>
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
    url: "https://forms.reform.app/i3kH4y/contact-form/lexflu",
    target: "#my-reform",
    background: "transparent",
  });
});

// * TODO: Emit a form completed response (this should trigger closing the modal that contains the form, and replacing it with a )
</script>
