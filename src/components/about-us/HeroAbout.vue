<script setup>
import images from "/public/images/heroabout.png";
import PrimaryButton from "../common/PrimaryButton.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about", current: true },
];

defineProps({
  title: {
    type: String,
    default: "Lorem Ipsum is simply dummy text of the printing and.",
  },

  description: {
    type: String,
    default:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 mb-[px] md:mb-[144px]">
    <div
      class="bg-[#E27A0C1F] pl-[px] md:pl-[110px] pr-[px] md:pr-[166px] py-[px] md:py-[112px] font-Poppins"
    >
      <div>
        <Breadcrumb :items="breadcrumbItems" />
      </div>
      <h2 class="md:text-[30px] font-bold leadind-snug mb-[px] md:mb-[25px]">
        {{ title }}
      </h2>
      <p
        class="text-[#222222] text-[15px] font-normal font-Poppins mb-[px] md:mb-[57px]"
      >
        {{ description }}
      </p>

      <a href="Get in touch">
        <PrimaryButton
          text="Get in touch"
          customClass="!bg-[#FB9E3C] !text-white !text-base !font-medium !font-Poppins !rounded-full !px-6 !py-3 flex items-center gap-2"
        >
          Get in touch
          <!-- arrow right -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-5 h-5 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14m-7-7l7 7-7 7"
            />
          </svg>
        </PrimaryButton>
      </a>
    </div>
    <div>
      <img :src="images" alt="heroabout" />
    </div>
  </div>
</template>
