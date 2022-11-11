<template>
  <div
    class="bg-base-200 rounded-3xl p-4 flex justify-center max-w-max border-base-300 border-2"
  >
    <form>
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

          <button @click="say(formInfo)" class="btn btn-primary rounded-2xl">
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
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";

const formInfo = ref({
  name: null,
  email: null,
  message: null,
});
function say(message) {
  console.log(message);
  alert(JSON.stringify(message));
}
// * TODO: Emit a form completed response (this should trigger closing the modal that contains the form, and replacing it with a )
</script>
