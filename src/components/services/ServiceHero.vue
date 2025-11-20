<script setup>
import Breadcrumb from "@/components/common/Breadcrumb.vue";



const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", current: true },
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

// const stats = [
//   {
//     value: "90+",
//     label: "Clients",
//     icon: "src/assets/icons/people-stats.svg",
//   },
//   {
//     value: "30+",
//     label: "countries",
//     icon: "src/assets/icons/location-stats.svg",
//   },
//   {
//     value: "50+",
//     label: "projects",
//     icon: "src/assets/icons/toggle-stats.svg",
//   },
// ];

const stats = [
  {
    value: "90+",
    label: "Clients",
    icon: "/people-stats.svg",
  },
  {
    value: "30+",
    label: "countries",
    icon: "/location-stats.svg",
  },
  {
    value: "50+",
    label: "projects",
    icon: "/toggle-stats.svg",
  },
];

</script>

<template>
  <div class="ml-[28px] md:ml-[170px] mr-[29px] md:mr-[130px]">
    <!--heroservice-->
    <div
      class="flex items-center justify-center mt-[62px] md:mt-[97px] mb-[px] md:mb-[px]"
    >
      <Breadcrumb :items="breadcrumbItems" />
    </div>

    <div class="text-center mt-[33px] md:mt-[15px]">
      <h1 class="font-Poppins text-[25px] md:text-[33px] font-semibold mb-[33px] md:mb-[13px]">
        {{ header }}
      </h1>
      <p class="font-Poppins text-[#898989] text-[12px] md:text-[16px] font-medium mb-[65px] md:mb-[45px]">
        {{ subheader }}
      </p>
    </div>

    <!-- stats -->
    <div
      class="grid grid-cols-2 bg-[#F4F4F4] md:bg-white md:shadow-xl rounded-lg  md:flex md:flex-row mb-[px] md:mb-[77px] md:pl-[90px] md:py-[72px]"
    >
      <div
        v-for="(item, index) in stats"
        :key="index"
        :class="[
          'flex items-center space-x-2 py-[31px] md:py-0 pl-[20px] pr-[px]',
          // mobile order: countries (1st), clients (2nd), projects (3rd)
          index === 1 ? 'order-1' : '',
          index === 0 ? 'order-2' : '',
          index === 2 ? 'order-3 col-span-2' : '', // projects spans full row
          'md:order-none md:col-span-1',
        ]"
      >
        <img :src="item.icon" :alt="item.label"  class="mr-3 md:mr-5 w-[35px] md:w-[55px] h-[35px] md:h-[55px]"/>

        <div class="font-Poppins">
          <p class="font-bold text-[#0B132A] text-[17px] md:text-[25px] leading-[30px]">
            {{ item.value }}
          </p>
          <p class="font-normal text-[#4F5665] text-[14px] md:text-xl">
            {{ item.label }}
          </p>
        </div>

        <!-- divider only on desktop -->
        <div
          v-if="index !== stats.length - 1"
          class="hidden md:block border-l-2 border-[#EEEFF2] md:h-30 ml-32"
        ></div>
      </div>
    </div>
  </div>
</template>
