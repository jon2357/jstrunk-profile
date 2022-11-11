<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal-mask" @click="$emit('close')">
      <div class="flex self-center justify-center" @click.stop="">
        <div class="flex flex-col max-w-max p-4 bg-slate-100 rounded-3xl gap-1">
          <div class="">
            <slot name="body">Something Exciting is Coming!</slot>
          </div>

          <!-- <div class="flex justify-end">
            <button class="btn btn-block rounded-3xl" @click="$emit('close')">
              Close
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* display: table; */
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* .modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  align-items: center;
}

.modal-container {
  width: 800px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 0px 0;
  vertical-align: middle;
  justify-content: center;
}

.modal-default-button {
  float: center;
} */

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
