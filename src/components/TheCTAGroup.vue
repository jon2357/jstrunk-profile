<template>
  <!-- CTA Button Group -->
  <div class="flex gap-2 place-items-center">
    <CTAButton
      :icon="ctaRoutes.directMessage.icon"
      :tooltip="ctaRoutes.directMessage.text"
      :text="null"
      @btnClick="buttonClick(1)"
      :isDisabled="true"
    />
    <CTAButton
      :icon="ctaRoutes.meeting.icon"
      :tooltip="ctaRoutes.meeting.text"
      :text="null"
      @btnClick="buttonClick(2)"
    />
    <CTAButton
      :icon="ctaRoutes.newsletter.icon"
      :tooltip="ctaRoutes.newsletter.text"
      :text="null"
      @btnClick="buttonClick(3)"
      :isDisabled="true"
    />
  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <BaseModal :show="showModal" @close="showModal = false">
      <template #body>
        <MessageMe v-if="modalFrom === 1"></MessageMe>
        <CalendlyMeeting v-if="modalFrom === 2"></CalendlyMeeting>
        <JoinNewsletter v-if="modalFrom === 3"></JoinNewsletter>
      </template>
    </BaseModal>
  </Teleport>
</template>
<script setup>
import { ctaRoutes } from "@/data";
import CTAButton from "@/components/Base/CTAButton.vue";
import BaseModal from "./Base/BaseModal.vue";
import JoinNewsletter from "./Forms/JoinNewsletter.vue";
import { ref } from "vue";
import MessageMe from "./Forms/MessageMe.vue";
import CalendlyMeeting from "./Forms/CalendlyMeeting.vue";

const showModal = ref(false);
const modalFrom = ref(0);

const emit = defineEmits(["btnClick"]);

const buttonClick = (value) => {
  console.log("group", value);
  showModal.value = true;
  modalFrom.value = value;
  emit("btnClick", value);
};
</script>
