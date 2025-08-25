<script setup>
import images from "/public/images/project-pic1.jpg";
</script>

<template>
  <div class="mt-[60px] md:mt-[0px] mb-[103px] md:mb-[0px]">
    <div class="text-center">
      <h2
        class="font-Poppins text-[#222222] text-xl font-semibold leading-[188%] mb-[23px]"
      >
        Our Recent Projects
      </h2>
      <p class="mb-[48px] text-xs font-normal text-[#525252]">
        Lorem Ipsum is simply dummy text of the printing and <br />
        typesetting industry.
      </p>
    </div>
    <!-- desktop -->
    <div
      class="grid space-y-7 grid-cols-1 md:grid-cols-3 md:gap-[38px] px-[40px] md:px-[0px]"
    >
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
          src="/public/images/project-pic4.jpg"
          alt=""
          class="w-full h-full object-cover rounded-[20px]"
        />
      </a>
      <a href="#">
        <img
          src="/public/images/project-pic3.jpg"
          alt=""
          class="w-full h-full object-cover rounded-[20px]"
        />
      </a>
     
    </div>

    <!-- mobile -->
    <div
      class="grid space-y-7 grid-cols-1 md:grid-cols-4 px-[36px] md:px-[] md:hidden"
    >
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
  </div>
</template>
