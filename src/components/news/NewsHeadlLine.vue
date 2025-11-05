<script setup>
import Breadcrumb from "@/components/common/Breadcrumb.vue";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news", current: true },
];

defineProps({
  header: {
    type: String,
    default: "Lorem Ipsum is simply dummy text of the printing and.",
  },
  subheader: {
    type: String,
    default:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
});
</script>

<template>
  <div class="ml-[28px] md:ml-[170px] mr-[29px] md:mr-[130px] mb-[47px] md:mb-[103px]">
    <!--heronews-->
    <div
      class="flex items-center justify-center mt-[62px] md:mt-[94px] mb-[33px] md:mb-[15px]"
    >
      <Breadcrumb :items="breadcrumbItems"/>
    </div>

    <div class="text-center mb-[px] md:mt-[px]">
      <h1
        class="font-Poppins text-[25px] md:text-[33px] font-semibold mb-[33px] md:mb-[13px]"
      >
        {{ header }}
      </h1>
      <p
        class="font-Poppins text-[#898989] text-[12px] md:text-[16px] font-medium mb-[px] md:mb-[0px]"
      >
        {{ subheader }}
      </p>
    </div>

    <!--searchbar-->
    <div class="bg-[#F1F1F1] flex items-center rounded-xl space-x-[19px] md:w-[400px] h-[49px] pr-4 md:mx-auto mt-[33px] md:mt-[74px]">  
      <span
        ><svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="ml-[25px]"
        >
          <path
            d="M14.9084 14.0247L10.5511 9.66728C11.3775 8.64696 11.875 7.34981 11.875 5.93752C11.875 2.66359 9.21142 0 5.93749 0C2.66356 0 0 2.66359 0 5.93752C0 9.21145 2.66359 11.875 5.93752 11.875C7.34981 11.875 8.64696 11.3775 9.66729 10.5511L14.0247 14.9085C14.1468 15.0305 14.3446 15.0305 14.4667 14.9085L14.9085 14.4666C15.0305 14.3446 15.0305 14.1467 14.9084 14.0247ZM5.93752 10.625C3.35268 10.625 1.25001 8.52236 1.25001 5.93752C1.25001 3.35268 3.35268 1.25001 5.93752 1.25001C8.52236 1.25001 10.625 3.35268 10.625 5.93752C10.625 8.52236 8.52236 10.625 5.93752 10.625Z"
            fill="#727272"
          />
        </svg>
      </span>
      <input type="text" placeholder="Search" class="w-full border-none focus:outline-none focus:ring-0"/>
    </div>
  </div>
</template>
