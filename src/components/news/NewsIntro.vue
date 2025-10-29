<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  descriptionOne: {
    type: String,
    required: true,
  },
  descriptionTwo: {
    type: String,
    required: true,
  },
});

const channels = [
  {
    image: "/images/channel-1.jpg",
    author: "John Smash",
    time: "5min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
    bgColor: "#000000",
  },
  {
    image: "/images/channel-2.jpg",
    author: "John Smash",
    time: "5min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
    bgColor: "bg-[#2351F5]",
  },
  {
    image: "/images/channel-3.jpg",
    author: "John Smash",
    time: "5min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
    bgColor: "bg-[#FF7C32]",
  },
  {
    image: "/images/channel-4.jpg",
    author: "John Smash",
    time: "5min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
    bgColor: "bg-[#2351F5]",
  },
  {
    image: "/images/channel-5.jpg",
    author: "John Smash",
    time: "5min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
    bgColor: "bg-[#23A54F]",
  },
  {
    image: "/images/channel-6.jpg",
    author: "John Smash",
    time: "5min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
    bgColor: "bg-[#2351F5]",
  },
  {
    image: "/images/channel-7.jpg",
    author: "John Smash",
    time: "5min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
    bgColor: "bg-[#9921C3]",
  },
];

</script>

<template>
  <div class="md:max-w-[1440px] mx-auto md:pl-[110px]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[72px]">
      <!--firstcard/left content-->
      <div class="font-Poppins px-[25px]">
        <img
          :src="image"
          alt=""
          class="h-[295px] md:h-[295px] md:w-full object-cover rounded-[20px]"
        />
        <div class="flex items-center space-x-5 mt-[21px]">
          <div class="bg-[#2351F5] text-[#FFFCFC] py-2.5 px-[32px]">
            {{ author }}
          </div>
          <span class="text-[#424242] font-normal text-[16px]"
            >.{{ time }}</span
          >
        </div>
        <h2
          class="font-semibold text-[20px] md:text-[30px] mt-[29px] md:mt-[21px] mb-[19px] md:mb-[32px]"
        >
          {{ title }}
        </h2>
        <div
          class="text-[#515151] leading-[208%] font-normal text-[12px] md:text-[17px] md:w-[529px]"
        >
          <p class="mb-0 md:mb-[44px]">
            {{ descriptionOne }}
          </p>
          <p class="mt-[44px] md:mt-[0px]">
            {{ descriptionTwo }}
          </p>
        </div>
        <div
          class="border-t-1 border-[#A5A5A5] mt-0 md:mt-[90px] hidden md:block"
        ></div>

        <!--secondcard-->
        <div class="font-Poppins mt-[70px] md:mt-[90px]">
          <img
            src="/images/news-pic1.jpg"
            alt=""
            class="h-[295px] md:h-[295px] md:w-full object-cover rounded-[20px]"
          />
          <div class="flex items-center space-x-5 mt-[21px]">
            <div class="bg-[#2351F5] text-[#FFFCFC] py-2.5 px-[32px]">
              {{ author }}
            </div>
            <span class="text-[#424242] font-normal text-[16px]"
              >.{{ time }}</span
            >
          </div>
          <h2
            class="font-semibold text-[20px] md:text-[30px] mt-[34px] md:mt-[21px] mb-[36px] md:mb-[32px]"
          >
            {{ title }}
          </h2>
          <div
            class="text-[#515151] leading-[208%] font-normal text-[12px] md:text-[17px] md:w-[529px]"
          >
            <p class="mb-0 md:mb-[100px]">
              {{ descriptionOne }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="border-t-1 border-[#A5A5A5] mt-[58px] md:mt-[90px] md:hidden block"
      ></div>

      <!-- right content -->
      <div class="pl-[25px] md:pl-0 pr-[22px] md:pr-[53px] mt-[55px] md:mt-0">
        <div class="font-Poppins flex flex-col space-y-[60px]">
          <!-- Loop through each channel -->
          <div
            v-for="(channel, index) in channels"
            :key="index"
            class="flex items-center space-x-[31px]"
            :class="{
              'hidden md:flex': [3, 5, 6].includes(index), // Hide 4th, 6th, and 7th on mobile
            }"
          >
            <img
              :src="channel.image"
              alt="channel image"
              class="w-[111px] h-[105px] md:w-[195px] md:h-[183px] object-cover flex-shrink-0 rounded-[10px] md:rounded-[20px]"
            />
            <div>
              <div class="flex items-center  space-x-3 md:space-x-5 mt-2 md:mt-[25px]">
                <div
                  class="bg-[#000000] text-[#FFFCFC] py-1.5 md:py-2.5 px-[20px] md:px-[32px] text-[10px] md:text-[14px]"
                  :class="channel.bgColor"
                >
                  {{ channel.author }}
                </div>
                <span class="text-[#424242] font-normal text-[11px] md:text-[14px]">
                  • {{ channel.time }}
                </span>
              </div>
              <div>
                <h2
                  class="font-semibold text-[13px] md:text-[20px] mt-[15px] md:mt-[23px] mb-[0px] md:mb-[32px]"
                >
                  {{ channel.title }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
