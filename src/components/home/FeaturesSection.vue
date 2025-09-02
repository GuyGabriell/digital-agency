<script setup>
import Card from "../common/Card.vue";
import NavigationBtn from "../common/NavigationBtn.vue";

const cards = [
  {
    tag: "Lorem ipsum",
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    link: "#",
  },

  {
    tag: "Lorem ipsum",
    tagBg: "#DC00001A",
    tagColor: "#DC0000",
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    link: "#",
  },

  {
    tag: "Lorem ipsum",
    tagBg: "#B000DC1C",
    tagColor: "#B000DC",
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    link: "#",
  },

  {
    tag: "Lorem ipsum",
    tagBg: "#0058DC17",
    tagColor: "#0058DC",
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    link: "#",
  },
];
</script>

<template>
  <div
    class="grid bg-[#F5F5F5] px-[40px] pt-[55px] md:pt-[69px] pb-[54px] md:pb-[100px] md:w-full h-[710px] md:h-[711px]"
  >
    <!-- Title -->
    <div
      class="flex justify-between items-center md:mb-[px] text-[#222222] font-Poppins md:px-[135px] px-[px]"
    >
      <div>
        <!-- Title on desktop -->
        <h2
          class="text-3xl text-[#222222] font-semibold font-Poppins mb-[32px] hidden md:block"
        >
          Lorem Ipsum
        </h2>
        <p
          class="text-[#525252] leading-[188%] font-Poppins text-base font-normal mb-[65px] hidden md:block"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry.
        </p>
        <!-- Title on mobile -->
        <div class="md:hidden mb-[35px]">
          <h2 class="text-3xl text-[#222222] font-semibold font-Poppins">
            Lorem Ipsum
          </h2>
          <p
            class="text-[#525252] leading-[188%] font-Poppins text-base font-normal"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <!-- Navigation Buttons/desktop -->
      <div class="flex gap-4 hidden md:block">
        <NavigationBtn direction="left" href="/prev" />
        <NavigationBtn direction="right" href="/next" />
      </div>
    </div>
    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 md:gap-[38px]">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :tag="card.tag"
        :title="card.title"
        :description="card.description"
        :link="card.link"
        :tagBg="card.tagBg"
        :tagColor="card.tagColor"
        :class="index === 0 ? 'block' : 'hidden md:block'"
      />
    </div>
    <!-- Navigation Buttons/mobile -->
    <div class="flex gap-4 mt-[46px] md:mt-[0px] justify-end md:hidden">
      <NavigationBtn direction="left" href="/prev" />
      <NavigationBtn direction="right" href="/next" />
    </div>
  </div>
</template>
