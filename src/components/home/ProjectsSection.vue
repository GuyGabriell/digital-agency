<script setup>
import images from "/public/images/project-pic1.jpg";
const sectionTitle = "Our Recent Projects";

const desktopLine1 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting";
const desktopLine2 = "industry.";

const mobileLine1 =
  "Lorem Ipsum is simply dummy text of the printing and";
const mobileLine2 = "typesetting industry.";

const projects = [
  {
    image: "/images/project-pic5.jpg",
    link: "#",
    width: "w-[246px]",
  },
  {
    image: "/images/project-pic6.jpg",
    link: "#",
    width: "w-[401px]",
  },
  {
    image: "/images/project-pic3.jpg",
    link: "#",
    width: "w-[469px]",
  },
];
</script>

<template>
  <div class="mt-[60px] md:mt-[0px] mb-[103px] md:mb-[164px] md:px-[135px]">
    <div class="text-center md:mt-[140px] md:mb-[70px]">
      <h2
        class="font-Poppins text-[#222222] text-xl md:text-[25px] font-semibold leading-[188%] mb-[23px]"
      >
        {{ sectionTitle }}
      </h2>
      <!-- desktop -->
      <p
        class="mb-[48px] md:text-sm font-normal text-[#525252] hidden md:block"
      >
        {{ desktopLine1 }} <br />
        {{ desktopLine2 }}
      </p>
      <!--mobile-->
      <p
        class="mb-[48px] text-xs md:text-sm font-normal text-[#525252] md:hidden"
      >
        {{ mobileLine1 }} <br />
        {{ mobileLine2 }}
      </p>
    </div>

    <!-- mobile -->
    <div class="grid space-y-7 grid-cols-1 px-[36px] md:hidden block">
      <a href="#">
        <img
          :src="images"
          alt=""
          class="w-full h-full object-cover rounded-[20px]"
        />
      </a>
      <a href="#">
        <img
          src="/public/images/project-pic2.jpg"
          alt=""
          class="w-full h-full object-cover rounded-[20px]"
        />
      </a>
      <a href="#">
        <img
          src="/public/images/project-pic3.jpg"
          alt=""
          class="w-full h-[150px] object-cover rounded-[20px]"
        />
      </a>
      <a href="#">
        <img
          src="/public/images/project-pic4.jpg"
          alt=""
          class="w-full h-full object-cover rounded-[20px]"
        />
      </a>
    </div>

    <!-- desktop -->
    <div class="hidden md:grid md:grid-cols-3 gap-6 px-6">
      <a href="#">
        <img
          :src="images"
          alt=""
          class="w-full h-full object-cover rounded-[20px]"
        />
      </a>
      <a href="#">
        <img
          src="/images/project-pic2.jpg"
          alt=""
          class="w-full h-full object-cover rounded-[20px]"
        />
      </a>
      <a href="#">
        <img
          src="/images/project-pic4.jpg"
          alt=""
          class="w-full h-full object-cover rounded-[20px]"
        />
      </a>
    </div>

    <!--second row on desktop-->
    <div class="hidden md:grid md:grid-cols-12 gap-6 px-6 mt-8">
      <div class="md:col-span-12 flex gap-6">
        <a
          v-for="(project, index) in projects"
          :key="index"
          :href="project.link"
          :class="project.width"
        >
          <img
            :src="project.image"
            alt=""
            class="w-full h-[223px] object-cover rounded-[20px]"
          />
        </a>
      </div>
    </div>
  </div>
</template>
