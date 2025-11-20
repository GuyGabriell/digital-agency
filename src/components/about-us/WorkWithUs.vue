<script setup>
import InfoCard from "@/components/common/InfoCard.vue";

const cards = [
  {
    tag: "Lorem ipsum",
    tagBg: "bg-[#B000DC1C] text-[#B000DC]",
    title: "Lorem Ipsum",
    bgColor: "#FFFFFF", 
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    link: "Read more",
  },
  {
    tag: "Lorem ipsum",
    tagBg: "bg-[#DC42001C] text-[#DC1A00]",
    title: "Lorem Ipsum",
    bgColor: "#F5F5F5", 
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
  },
  {
    tag: "Lorem ipsum",
    tagBg: "bg-[#00DC8D1C] text-[#00DC72]",
    title: "Lorem Ipsum",
    bgColor: "#F5F5F5", 
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
  },
];
</script>

<template>
  <div class="mb-[px] md:mb-[px] px-[35px] md:px-[px]">
    <div class="px-[px] md:px-[110px] mt-[62px]">
      <!-- Title -->
      <h1
        class="text-[25px] text-[#222222] font-semibold font-Poppins mb-[px] md:mb-[63px]"
      >
        Why work with us
      </h1>
    </div>
    <div class="px-[px] md:px-[110px] mb[px] md:mb-[147px] mt-[42px]">
      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-[43px]">
        <InfoCard
          v-for="(card, index) in cards"
          :key="index"
          :tag="card.tag"
          :tagBg="card.tagBg"
          :bgColor="card.bgColor"
          :title="card.title"
          :description="card.description"
          :link="card.link"
          :showLink="index === 0"
          class="py-[60px] px-[37px] space-y-[20px]"
        />
      </div>
    </div>
  </div>
</template>

