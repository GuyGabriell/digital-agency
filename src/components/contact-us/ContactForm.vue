<script setup>
import PrimaryButton from "../common/PrimaryButton.vue";
import topcurve from "/public/topcurve.svg";
import bottomcurve from "/public/bottomcurve.svg";
import mobcurve1 from "/public/mobcurve1.svg";
import mobcurve2 from "/public/mobcurve2.svg";
</script>

<template>
  <div
    class="relative bg-[#F5F5F5] px-[28px] md:px-[385px] pt-[59px] md:pt-[54px] pb-[61px] md:pb-[63px] md:max-w-[1440px] mb-0 md:mb-[150px] font-Poppins"
  >
    <!--desktop-->
    <div>
      <img
        :src="topcurve"
        alt="topcurve"
        class="absolute top-0 right-0 hidden md:block md:pl-[393px]"
      />
      <img
        :src="bottomcurve"
        alt="bottomcurve"
        class="absolute bottom-0 left-0 hidden md:block"
      />
    </div>
    <!--mobile-->
    <div class="md:hidden block">
      <img :src="mobcurve1" alt="mobcurve1" class="absolute top-0 right-0" />
      <img :src="mobcurve2" alt="mobcurve2" class="absolute bottom-0 left-0" />
    </div>
    <!--contactform-->
    <form action="" class="relative">
      <div class="text-center space-y-3">
        <h2 class="md:text-[30px] font-normal">Say hello</h2>
        <p class="text-[13px] font-medium text-[#777777]">
          Lorem Ipsum is simply dummy text of the printing .
        </p>
      </div>
      <div class="mt-[79px]">
        <div class="flex space-x-[27px]">
          <div class="flex flex-col">
            <label for="" class="mb-2 md:mb-6 text-[14px] font-medium text-[#4F4F4F]"
              >First Name</label
            >
            <input
              type="text"
              name=""
              id=""
              class="md:w-[322px] w-[153px] h-[48px] md:h-[56px] bg-[#FFFFFF] rounded-[9px] px-2 border-none focus:outline-none focus:ring-0"
            />
          </div>
          <div class="flex flex-col">
            <label for="" class="mb-2 md:mb-6 text-[14px] font-medium text-[#4F4F4F]"
              >Last Name</label
            >
            <input
              type="text"
              name=""
              id=""
              class="md:w-[322px] w-[153px] h-[48px] md:h-[56px] bg-[#FFFFFF] rounded-[9px] px-2 border-none focus:outline-none focus:ring-0"
            />
          </div>
        </div>
        <div class="flex flex-col mt-[17px] md:mt-[20px]">
          <label for="" class="mb-2 md:mb-6 text-[14px] font-medium text-[#4F4F4F]"
            >Email Address</label
          >
          <input
            type="text"
            name=""
            id=""
            class="md:w-[671px] h-[48px] md:h-[56px] bg-[#FFFFFF] rounded-[9px] px-2 border-none focus:outline-none focus:ring-0"
          />
        </div>
        <div class="flex flex-col mt-[17px] md:mt-[20px]">
          <label for="" class="mb-2 md:mb-6 text-[14px] font-medium text-[#4F4F4F]"
            >Message</label
          >
          <input
            type="text"
            name=""
            id=""
            class="md:w-[671px] md:h-[232px] w-full h-[200px] bg-[#FFFFFF] rounded-[9px] px-2 border-none focus:outline-none focus:ring-0"
          />
        </div>

        <div class="mt-[66px] md:mt-[51px] md:w-[671px]">
          <a href="Get in touch">
            <PrimaryButton
              text="Get in touch"
              customClass="!bg-[#DC7000] !text-white !text-base !font-medium !font-Poppins !rounded-[10px] !px-8 !py-3 flex items-center gap-2 !ml-auto"
            >
              Get in touch
            </PrimaryButton>
          </a>
        </div>
      </div>
    </form>
  </div>
</template>
