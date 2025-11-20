<script setup>
import images from "/public/images/service.png";
import PrimaryButton from "../common/PrimaryButton.vue";
// import SecondaryButton from "../common/SecondaryButton.vue";

const service = {
  image: images,
  description1:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  description2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  link: "#",
  buttonText: "Read more",
};

// function handleReadMore() {
//   console.log("Read more clicked!");
// }
</script>

<template>
  <section>
    <!--first card -->
    <div
      class="md:max-w-[px] md:h-[px] mx-auto px-[px] md:pl-[109px] md:mb-[176px] pr-[px] md:pr-[161px] flex flex-col md:flex-row items-center"
    >
      <div
        class="w-[331px] px- md:w-[536px] md:mt-[px] md:ml-[px] font-Poppins mr-[px] md:mr-[138px]"
      >
        <!--desktop-->
        <h1
          class="w-[472px] text-[21px] md:text-[30px] leading-snug font-Poppins font-medium mb-[px] text-[#000000]"
        >
          Lorem Ipsum is simply dummy <br />
          text dummy text
        </h1>

        <p
          class="w-[319px] md:w-full text-[13px] md:text-[17px] font-Poppins leading-snug font-normal text-[#515151] mt-[34px] md:mt-[60px]"
        >
          {{ service.description1 }}
        </p>

        <p
          class="w-[304px] md:w-full text-[13px] md:text-[17px] font-Poppins leading-snug font-normal text-[#515151] mt-[22px] md:mt-[60px] mb-[30px] md:mt-[46px]"
        >
          {{ service.description2 }}
        </p>

        <!-- button -->
         <a href="Read more">
          <PrimaryButton
            text="Read more"
            customClass="!bg-[#DC7000] !text-white !text-base !font-medium !font-Poppins !rounded-none !px-6 !py-2"
          />
        </a>
        <!-- <a :href="service.link" @click.prevent="handleReadMore">
          <SecondaryButton
            :text="service.buttonText"
            customClass="!bg-[#DC7000] !text-white !text-base !font-medium !font-Poppins !px-6 !py-2"
          />
        </a> -->
      </div>
      <!-- image-desktop -->
      <div>
        <img
          :src="service.image"
          alt="Service"
          class="hidden md:block md:w-[496px] md:h-[489px] object-cover shrink-0"
        />
      </div>

      <!-- image-mobile  -->
      <img
        :src="service.image"
        alt="Service"
        class="md:hidden mb-[49px] mt-[66px] object-cover"
      />
     
    </div>

    <!--second card -->

    <div
      class="md:max-w-[px] md:h-[px] mx-auto px-[px] md:pl-[109px] md:mb-[176px] pr-[px] md:pr-[161px] flex flex-col md:flex-row items-center"
    >
      <!-- image-desktop -->
      <div>
        <img
          src="/images/service1.png"
          alt="Service"
          class="hidden md:block md:w-[496px] md:h-[489px] object-cover shrink-0"
        />
      </div>
      <div
        class="w-[331px] px- md:w-[536px] md:mt-[px] md:ml-[px] font-Poppins ml-[px] md:ml-[138px]"
      >
        <!--desktop-->
        <h1
           class="w-[472px] text-[21px] md:text-[30px] leading-snug font-Poppins font-medium mb-[px] text-[#000000]"
        >
          Lorem Ipsum is simply dummy <br />
          text dummy text
        </h1>

        <p
          class="w-[319px] md:w-full text-[13px] md:text-[17px] font-Poppins leading-snug font-normal text-[#515151] mt-[34px] md:mt-[60px]"
        >
          {{ service.description1 }}
        </p>

        <p
           class="w-[304px] md:w-full text-[13px] md:text-[17px] font-Poppins leading-snug font-normal text-[#515151] mt-[22px] md:mt-[60px] mb-[30px] md:mt-[46px]"
        >
          {{ service.description2 }}
        </p>

        <!-- button -->
         <a href="Read more">
          <PrimaryButton
            text="Read more"
            customClass="!bg-[#DC7000] !text-white !text-base !font-medium !font-Poppins !rounded-none !px-6 !py-2"
          />
        </a>
        <!-- <a :href="service.link" @click.prevent="handleReadMore">
          <SecondaryButton
            :text="service.buttonText"
            customClass="!bg-[#DC7000] !text-white !text-base !font-medium !font-Poppins !px-6 !py-2"
          />
        </a> -->
      </div>
      
     
      <!-- image-mobile -->
      <img
        src="/images/service1.png"
        alt="Service"
        class="md:hidden mb-[49px] mt-[66px] w-full h-[331px] object-cover"
      />
      
    </div>

    <!--third card -->

    <div
      class="md:max-w-[px] md:h-[px] mx-auto px-[px] md:pl-[109px] md:mb-[176px] pr-[px] md:pr-[161px] flex flex-col md:flex-row items-center"
    >
      <div
        class="w-[331px] px- md:w-[536px] md:mt-[px] md:ml-[px] font-Poppins mr-[px] md:mr-[138px]"
      >
        <!--desktop-->
        <h1
           class="w-[472px] text-[21px] md:text-[30px] leading-snug font-Poppins font-medium mb-[px] text-[#000000]"
        >
          Lorem Ipsum is simply dummy <br />
          text dummy text
        </h1>

        <p
          class="w-[319px] md:w-full text-[13px] md:text-[17px] font-Poppins leading-snug font-normal text-[#515151] mt-[34px] md:mt-[60px]"
        >
          {{ service.description1 }}
        </p>

        <p
            class="w-[304px] md:w-full text-[13px] md:text-[17px] font-Poppins leading-snug font-normal text-[#515151] mt-[22px] md:mt-[60px] mb-[30px] md:mt-[46px]"
        >
          {{ service.description2 }}
        </p>

        <!-- button -->
         <a href="Read more">
          <PrimaryButton
            text="Read more"
            customClass="!bg-[#DC7000] !text-white !text-base !font-medium !font-Poppins !rounded-none !px-6 !py-2"
          />
        </a>
        <!-- <a :href="service.link" @click.prevent="handleReadMore">
          <SecondaryButton
            :text="service.buttonText"
            customClass="!bg-[#DC7000] !text-white !text-base !font-medium !font-Poppins !px-6 !py-2"
          />
        </a> -->
      </div>
      <!-- image-desktop -->
      <div>
        <img
          src="/images/service2.png"
          alt="Service"
          class="hidden md:block md:w-[496px] md:h-[489px] object-cover shrink-0"
        />
      </div>

      <!-- image-mobile -->
      <img
        src="/images/service2.png"
        alt="Service" 
        class="md:hidden mt-[66px] w-full h-[243px] object-cover"
      />
      
    </div>
  </section>
</template>
