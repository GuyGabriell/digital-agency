<script setup>
import { ref } from "vue";
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

const totalPages = 2;
const currentPage = ref(1);

const nextPage = () => {
  if (currentPage.value < totalPages) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 mb-[px] md:mb-[144px] relative">
    <div class="md:hidden w-full">
      <!--desktopimage-->
      <img :src="images" alt="heroabout" class="w-full h-auto block" />
    </div>
    <!-- Pagination -->
    <div
      class="absolute bottom-0 right-126 z-10 flex items-center justify-center space-x-6 bg-[#333333] text-[16px] text-white px-4 h-[67px] text-sm w-[179px]"
    >
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="disabled:opacity-50"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_513)">
            <path
              d="M11.2787 7.98515C11.2296 7.99312 11.1799 7.9968 11.1302 7.99615L2.66446 7.99615L2.84906 8.08201C3.0295 8.16741 3.19365 8.28365 3.33417 8.42545L5.70818 10.7995C6.02084 11.0979 6.07338 11.5781 5.83267 11.9371C5.55253 12.3197 5.01529 12.4027 4.63268 12.1226C4.60177 12.1 4.57239 12.0753 4.54478 12.0487L0.251816 7.75575C-0.0836792 7.42063 -0.0839744 6.877 0.251145 6.54151C0.25136 6.54129 0.251602 6.54105 0.251816 6.54084L4.54478 2.24787C4.88055 1.91304 5.42417 1.91379 5.75902 2.24956C5.78537 2.27599 5.80998 2.3041 5.83267 2.33373C6.07338 2.69275 6.02084 3.17289 5.70818 3.47136L3.33846 5.84967C3.21249 5.97577 3.06765 6.08151 2.90916 6.16305L2.65159 6.27896L11.083 6.27896C11.5216 6.26268 11.9064 6.56906 11.9888 7.00018C12.0647 7.46825 11.7468 7.90922 11.2787 7.98515Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_513">
              <rect
                width="12"
                height="12"
                fill="white"
                transform="matrix(1 0 0 -1 0 12)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>

      <span>{{ currentPage }} of {{ totalPages }}</span>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="disabled:opacity-50"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_509)">
            <path
              d="M0.721267 7.98515C0.770368 7.99312 0.820059 7.9968 0.869777 7.99615L9.33554 7.99615L9.15094 8.08201C8.9705 8.16741 8.80635 8.28365 8.66583 8.42545L6.29182 10.7995C5.97916 11.0979 5.92662 11.5781 6.16733 11.9371C6.44747 12.3197 6.98471 12.4027 7.36732 12.1226C7.39823 12.1 7.42761 12.0753 7.45522 12.0487L11.7482 7.75575C12.0837 7.42063 12.084 6.877 11.7489 6.54151C11.7486 6.54129 11.7484 6.54105 11.7482 6.54084L7.45522 2.24787C7.11945 1.91304 6.57583 1.91379 6.24098 2.24956C6.21463 2.27599 6.19002 2.3041 6.16733 2.33373C5.92662 2.69275 5.97916 3.17289 6.29182 3.47136L8.66154 5.84967C8.78751 5.97577 8.93235 6.08151 9.09084 6.16305L9.34841 6.27896L0.917026 6.27896C0.478418 6.26268 0.0936079 6.56906 0.0112095 7.00018C-0.0646954 7.46825 0.2532 7.90922 0.721267 7.98515Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_509">
              <rect
                width="12"
                height="12"
                fill="white"
                transform="matrix(-1 0 0 -1 12 12)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>

    <div
      class="bg-[#E27A0C1F] pl-[31px] md:pl-[110px] pr-[37px] md:pr-[166px] py-[74px] md:py-[112px] font-Poppins"
    >
      <div>
        <Breadcrumb :items="breadcrumbItems" class="mb-[12px] md:mb-[38px]" />
      </div>
      <h2 class="md:text-[30px] font-bold leadind-snug mb-[20px] md:mb-[25px]">
        {{ title }}
      </h2>
      <p
        class="text-[#222222] text-[15px] font-normal font-Poppins mb-[37px] md:mb-[57px]"
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
    <!--mobileimage-->
    <div class="hidden md:block">
      <img :src="images" alt="heroabout" />
    </div>
    
  </div>
</template>
