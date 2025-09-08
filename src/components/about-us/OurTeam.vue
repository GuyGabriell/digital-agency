<script setup>
import images from "/public/images/Bill.png";



defineProps({
  title: {
    type: String,
    default: " Our Team",
  },

});
</script>

<template>
  <div>
    <div>
      <!-- Title -->
      <h1
        class="text-[25px] text-[#222222] font-semibold font-Poppins mb-[px] md:mb-[53px] ml-[px] md:ml-[110px]"
      >
       {{ title }}
      </h1>
    </div>
    <div
      class=""
    >
      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-[24px] md:pl-[110px] md:mr-[70px]">
        <div class="bg-[#F5F5F5] rounded-lg">
          <img :src="images" alt="">
          <p>John peter</p>
          <span>COO</span>
        </div>
        <div class="bg-[#F5F5F5] rounded-lg">
          <img  src="/public/images/Beverly.png" alt=""> 
          <p>John peter</p>
          <span>COO</span> 
        </div>
        <div class="bg-[#F5F5F5] rounded-lg">
          <img src="/public/images/Claudia.png" alt="">
          <p>John peter</p>
          <span>COO</span>
        </div>
        <div class="bg-[#F5F5F5] rounded-lg">
          <img src="/public/images/Avatar.png" alt="">
          <p>John peter</p>
          <span>COO</span>
        </div>
      </div>
    </div>
  </div>
</template>
