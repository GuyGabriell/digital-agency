<script setup>
import images from "/public/images/introabout.png";
</script>

<template>
  <div>
    <div
      class="flex flex-col md:flex-row gap-[98px] md:bg-[#F5F5F5] pl-[px] md:pl-[110px] pt-[px] md:pt-[113px] pr-[px] md:pr-[203px] mb-[px] md:mb-[138px] mt-[92px] md:mt-[px]"
    >
      <img :src="images" alt="introabout" class="w-[496px] object-cover" />

      <div class="mt-[20px] md:mt-[24px] px-[30px] md:px-[0px]">
        <div class="font-Poppins">
          <span class="text-base font-medium text-[#DC7000]">Lorem ipsum</span>
          <h1
            class="font-semibold text-[25px] leading-[158%] mt-[14px] md:mt-[14px]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
          <p
            class="text-base font-normal mt-[45px] md:mt-[14px] leading-[202%]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
