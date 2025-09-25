<script setup>
import images from "/public/images/office.jpg";
import mobile from "/public/mobile-img/office1.png";
import spans from "../../assets/spans.svg";

</script>

<template>
  <section class="md:py-20 bg-white">
    <div
      class="max-w-6xl mx-auto px-6 grid md:grid-cols-1 items-center md:mb-96"
    >
      <div class="mx-auto text-center mb-[48px] md:mb-[49px]">
        <!-- title mobile -->
        <h2
          class="font-Poppins leading-[188%] text-base md:text-[25px] mt-[49px] md:mt-[px] font-semibold text-[#222222] block md:hidden"
        >
          Lorem Ipsum issimply dummy text of the printing and typesetting
          industry.
        </h2>
        <!-- title desktop -->
        <h2
          class="font-Poppins leading-[188%] text-center text-base md:text-[25px] font-semibold text-[#222222] hidden md:block"
        >
          Lorem Ipsum issimply dummy text of the printing and <br />
          typesetting industry.
        </h2>
      </div>
      <!-- Desktop Text -->
      <div class="hidden md:block md:mb-[49px] text-[#222222] font-Poppins">
        <h2 class="text-[30px] font-semibold mb-4">Lorem Ipsum</h2>
        <p class="text-gray-600 leading-relaxed mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text
          <br />
          ever since the 1500s.
        </p>
      </div>

      <!-- Right Content -->
      <div class="relative">
        <div class="absolute -top-15 right-22 z-0">
          <img :src="spans" alt="spans decoration" class="hidden md:block" />
        </div>

        <img
          :src="images"
          alt="Office workspace"
          class="absolute hidden md:block rounded-md z-10 w-[934px]"
        />
      </div>

      <!-- Mobile Image -->
      <div>
        <img :src="mobile" alt="office mobile" class="block md:hidden" />
      </div>
    </div>
  </section>

</template>
