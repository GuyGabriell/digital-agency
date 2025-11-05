<script setup>
import { ref } from "vue";
import SecondaryButton from "../common/SecondaryButton.vue";

// Props for reusability
defineProps({
  header: { type: String, default: "Lorem Ipsum" },
  title: { type: String, default: "Stay in the loop" },
  description1: {
    type: String,
    default: "Subscribe to receive the latest news and updates about TDA.",
  },
  description2: {
    type: String,
    default: "We promise not to spam you!",
  },
  buttonText: { type: String, default: "Continue" },
  link: { type: String, default: "#" }, // optional link
});

// State
const email = ref("");

// Emit event so parent can handle submission
const emit = defineEmits(["submit"]);

const handleSubmit = () => {
  if (!email.value) return;
  emit("submit", email.value);
  email.value = ""; // clear input after submit
};
</script>

<template>
  <!-- Title -->
  <div class="md:px-[110px] pl-[22px] mt-[49px] md:mt-[0px]">
    <h2 class="text-3xl font-semibold mb-[32px] font-Poppins">{{ header }}</h2>
    <p class="md:mb-[74px] font-medium font-Poppins text-[12px] md:text-[16px] text-[#525252] leading-[188%]">
      Lorem Ipsum is simply dummy text of the printing and typesetting <br class="hidden md:block" />
      industry.
    </p>
  </div>

  <!-- Newsletter Section -->
  <div
    class="bg-[#1B1B1B] text-white md:mx-[110px] px-4 md:px-[52px] py-8 md:py-[40px] mr-[32px] ml-[22px] flex flex-col md:flex-row md:items-center md:justify-between rounded-xl font-Poppins md:mb-[150px] mt-[41px] md:mb-[0px]"
  >
    <!-- Left side (text) -->
    <div>
      <h2 class="text-3xl font-medium text-white font-Poppins">{{ title }}</h2>
      <p class="text-white font-normal text-[15px] font-Poppins mt-8">
        {{ description1 }} <br />
        {{ description2 }}
      </p>
    </div>

    <!-- Right side (form) -->
    <div class="bg-white rounded-lg mt-[43px] font-Poppins">
      <form @submit.prevent="handleSubmit" class="flex">
        <input
          v-model="email"
          type="email"
          placeholder="Enter email address"
          class="flex w-full px-3  rounded-lg text-[13px] text-[#898989] font-Poppins border-none focus:outline-none focus:ring-0"
          required
        />

        <!-- Button -->
        <SecondaryButton
          :text="buttonText"
          type="submit"
          customClass="!bg-[#DC7000] !rounded-lg !text-white !text-[13px] !font-medium !font-Poppins !my-1 !mr-1 !px- !py-2"
        />
      </form>
    </div>
  </div>
</template>
