<script setup>
import images from "/public/images/javi.png";





</script>
<template>
  <header class="md:px-[135px] md:py-[106px] relative mb-[48px] md:mb-[83px]">
    <!-- Background Patterns -->
    <div class="absolute inset-0 -z-10">
      <!-- Curved Line -->
      <svg
        width="1049"
        height="267"
        viewBox="0 0 1049 267"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="relative md:ml-[300px] hidden md:block"
      >
        <path
          d="M1 1C29.4186 32.5504 103.606 94.1487 173.008 88.1391C259.759 80.6271 319 56 393.377 79.1247C439.677 93.5199 435.257 138.219 477.137 170.771C519.017 203.323 701.495 124.197 701.495 124.197C701.495 124.197 830.127 66.6047 842.591 124.197C855.055 181.789 803.702 250.398 827.135 264.421C845.881 275.638 982.856 224.357 1049 197.313"
          stroke="#E17A0E"
          stroke-opacity="0.24"
        />
      </svg>

      <!-- Green Square -->
      <svg
        width="57"
        height="57"
        viewBox="0 0 57 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute ml-167.5 top-0 mt-24 hidden md:block"
      >
        <rect
          x="-3.34912"
          y="23.5216"
          width="45.7199"
          height="45.7199"
          rx="10"
          transform="rotate(-35.9958 -3.34912 23.5216)"
          fill="#0CBE64"
        />
      </svg>

      <!-- Background Curve -->
      <svg
        width="1438"
        viewBox="0 0 1438 547"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-auto mt-[510px] md:mt-0"
      >
        <path
          d="M285.099 146.545C195.248 217.164 71.3581 222.438 0 212.532V547H1438V304.208C1424.16 304.208 1400.33 299.439 1376.98 304.208C1325.01 314.824 1263.62 395.65 1211.5 405.5C1084.5 429.5 951.5 257 951.5 257C951.5 257 857.91 155.864 794.5 94.5C732.5 34.5 673.824 0.500025 547.5 0.5C445.478 0.49998 347.5 97.5 285.099 146.545Z"
          fill="#FDF6EE"
        />
      </svg>
    </div>

    <!-- Hero Content -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10 pr-[48px] pl-[51px] pt-[108px] md:px-0 md:pt-0"
    >
      <!-- Left Column -->
      <div>
        <p class="text-[#E87D0E] font-bold text-xl mb-2 font-Poppins">
          Digital Marketing
        </p>
        <h1
          class="text-3xl md:text-[50px] font-bold text-black leading-[155%] font-Poppins"
        >
          Work that we <br class="hidden md:block" />
          produce for our <br class="hidden md:block" />
          clients
        </h1>
        <p
          class="leading-[200%] text-[16px] text-black font-medium font-Poppins mb-5 max-w-md"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
        <a href="#">
          <PrimaryButton
            text="Get more details"
            customClass="!bg-[#FB9E3C] !text-white !text-base !font-medium !font-Poppins !rounded-full !px-6 !py-3 !mt-14"
          />
        </a>
      </div>

      <!-- Right Column -->
      <div class="hidden md:flex justify-center">
        <img :src="images" alt="Digital marketing showcase" />
      </div>
    </div>
  </header>
</template>
