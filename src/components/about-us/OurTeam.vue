<script setup>
import images from "/public/images/Bill.png";

defineProps({
  title: {
    type: String,
    default: " Our Team",
  },
});

const teamMembers = [
  {
    image: "/public/images/Bill.png",
    name: "John Peter",
    role: "COO",
  },
  {
    image: "/public/images/Beverly.png",
    name: "Beverly Smith",
    role: "COO",
  },
  {
    image: "/public/images/Claudia.png",
    name: "Claudia White",
    role: "COO",
  },
  {
    image: "/public/images/Avatar.png",
    name: "John Peter",
    role: "COO",
  },
];
</script>

<template>
  <div class="mb-[96px] md:mb-[130px] pl-[31px] pr-[49px]">
    <div>
      <!-- Title -->
      <h1
        class="text-[25px] text-[#222222] font-semibold font-Poppins mt-[65px] mb-[43px] md:mb-[53px] ml-[px] md:ml-[110px]"
      >
        {{ title }}
      </h1>
    </div>
    <div class="">
      <!-- Cards -->
      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-[24px] md:pl-[110px] md:mr-[66px]"
      >
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="bg-[#F5F5F5] rounded-lg flex flex-col items-center justify-center text-center py-[35px] md:py-[50px]"
          :class="{ 'hidden md:flex': index === teamMembers.length - 1 }"
        >
          <img :src="member.image" alt="" class="w-20 h-20 rounded-full mb-3" />
          <p class="font-medium font-Poppins mb-2">{{ member.name }}</p>
          <span class="text-sm font-Poppins">{{ member.role }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
