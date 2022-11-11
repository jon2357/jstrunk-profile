<template>
  <div
    class="bg-base-200 rounded-3xl p-4 flex justify-center max-w-max border-base-300 border-2"
  >
    <form>
      <div class="form-control">
        <label for="email" class="label">
          <span class="label-text text-lg font-bold">Join my Newsletter!</span>
        </label>
        <div
          class="flex align-center justify-center flex-wrap gap-1 w-min-fit max-w-full"
        >
          <input
            id="email"
            type="email"
            placeholder="username@site.com"
            v-model="emailAddress"
            class="input input-bordered rounded-2xl sm:w-96"
          />
          <button
            @click="say(emailAddress)"
            class="rounded-2xl mr-1 btn btn-primary"
          >
            Subscribe
          </button>
        </div>
        <p class="text-sm pt-1">
          Big things are on the horizon! Sign-up to keep in touch!
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emailAddress = ref("");
function say(message) {
  alert(message);
}
// * TODO: Emit a form completed response (this should trigger closing the modal that contains the form, and replacing it with a )
</script>
