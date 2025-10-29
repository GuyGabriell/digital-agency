<script setup>
import { ref } from "vue";

const activeIndex = ref(0);

const testimonials = [
  {
    avatar: "public/images/robert.png",
    name: "Vizeh Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    avatar: "public/images/christy.png",
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: 4.5,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    avatar: "public/images/young.png",
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: 4.5,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const nextTestimonial = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length;
};

const prevTestimonial = () => {
  activeIndex.value =
    (activeIndex.value - 1 + testimonials.length) % testimonials.length;
};
</script>

<template>
  <section
    class="py-[88px] font-Poppins bg-[#F5F5F5] text-center md:mb-[127px]"
  >
    <h2
      class="text-[23px] mb-[26px] md:text-3xl font-medium md:font-bold text-[#0B132A] leading-[50px]"
    >
      Trusted by Thousands of <br />
      Happy Customer
    </h2>
    <p
      class="text-center md:mt-[20px] text-[#525252] text-[12px] md:text-base leading-[188%]"
    >
      Lorem Ipsum is simply dummy text of the <br class="block md:hidden" />
      printing and typesetting
      <br class="hidden md:block" />
      industry.Lorem <br class="block md:hidden" />
      Ipsum is simply dummy .
    </p>

    <!-- Testimonials -->
    <div
      class="mt-[77px] md:mt-[68px] flex gap-2 md:gap-[50px] justify-start overflow-x-auto snap-x snap-mandatory scroll-smooth md:justify-center md:overflow-visible md:flex-row"
    >
      <div
        v-for="(t, i) in testimonials"
        :key="i"
        class="p-6 bg-white rounded-xl shadow-sm border-2 transition-all duration-300 flex-shrink-0 snap-center w-[85%] sm:w-[70%] md:w-[350px]"
        :class="[
          i === activeIndex ? 'border-[#DC7000]' : 'border-[#DDDDDD]',
          i === 0 ? '-ml-[10%] md:ml-0' : '',
        ]"
      >
        <div class="flex items-center gap-4 mb-[20px]">
          <img
            :src="t.avatar"
            alt="Avatar"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div class="text-left">
            <h4 class="font-medium text-[#0B132A] text-[18px]">{{ t.name }}</h4>
            <p class="text-sm text-[#4F5665]">{{ t.location }}</p>
          </div>
          <div class="ml-auto flex items-center gap-1">
            <span class="text-sm font-semibold">{{ t.rating }}</span>
            <span class="text-[#FEA250]">★</span>
          </div>
        </div>
        <p class="text-[#525252] text-[14px] text-left leading-[188%]">
          {{ t.text }}
        </p>
      </div>
    </div>

    <div
      class="flex justify-between px-[29px] md:pl-[109px] md:pr-[191px] mt-10"
    >
      <!-- Pagination Dots -->
      <div class="flex justify-center mt-8 space-x-2">
        <button
          v-for="(dot, i) in 4"
          :key="i"
          class="rounded-full transition-all duration-300"
          :class="[
            i === activeIndex ? 'bg-[#DC7000] w-8 h-3' : 'bg-gray-300 w-3 h-3',
          ]"
          @click="activeIndex = i"
        />
      </div>

      <!-- Navigation Arrows -->
      <div class="flex justify-center mt-6 space-x-4">
        <button
          class="w-10 h-10 flex items-center justify-center rounded-full border border-[#DC7000] text-[#DC7000] transition-all"
          @click="prevTestimonial"
        >
          <svg
            width="15"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 7.50156H3.925L8.4625 2.05157C8.67467 1.79629 8.77675 1.46719 8.74628 1.13666C8.7158 0.806128 8.55527 0.501239 8.3 0.289065C8.04473 0.0768921 7.71563 -0.0251853 7.3851 0.00528938C7.05456 0.035764 6.74967 0.196295 6.5375 0.451565L0.2875 7.95156C0.245451 8.01122 0.207849 8.07389 0.175 8.13907C0.175 8.20157 0.175 8.23907 0.0875002 8.30157C0.0308421 8.44489 0.0011764 8.59745 0 8.75156C0.0011764 8.90568 0.0308421 9.05824 0.0875002 9.20156C0.0875002 9.26406 0.0874998 9.30157 0.175 9.36407C0.207849 9.42924 0.245451 9.49191 0.2875 9.55157L6.5375 17.0516C6.65503 17.1927 6.8022 17.3061 6.96856 17.3839C7.13491 17.4617 7.31636 17.5019 7.5 17.5016C7.79207 17.5021 8.07511 17.4004 8.3 17.2141C8.42657 17.1091 8.5312 16.9803 8.60789 16.8348C8.68458 16.6894 8.73183 16.5303 8.74692 16.3665C8.76202 16.2028 8.74466 16.0377 8.69586 15.8807C8.64705 15.7237 8.56775 15.5779 8.4625 15.4516L3.925 10.0016H18.75C19.0815 10.0016 19.3995 9.86987 19.6339 9.63545C19.8683 9.40103 20 9.08309 20 8.75156C20 8.42004 19.8683 8.1021 19.6339 7.86768C19.3995 7.63326 19.0815 7.50156 18.75 7.50156Z"
              fill="#DC7000"
            />
          </svg>
        </button>
        <button
          class="w-10 h-10 flex items-center justify-center rounded-full bg-[#DC7000] border border-[#DC7000] text-white hover:text-white transition-all"
          @click="nextTestimonial"
        >
          <svg
            width="15"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25 7.50156H16.075L11.5375 2.05157C11.3253 1.79629 11.2232 1.46719 11.2537 1.13666C11.2842 0.806128 11.4447 0.501239 11.7 0.289065C11.9553 0.0768921 12.2844 -0.0251853 12.6149 0.00528938C12.9454 0.035764 13.2503 0.196295 13.4625 0.451565L19.7125 7.95156C19.7545 8.01122 19.7922 8.07389 19.825 8.13907C19.825 8.20157 19.825 8.23907 19.9125 8.30157C19.9692 8.44489 19.9988 8.59745 20 8.75156C19.9988 8.90568 19.9692 9.05824 19.9125 9.20156C19.9125 9.26406 19.9125 9.30157 19.825 9.36407C19.7922 9.42924 19.7545 9.49191 19.7125 9.55157L13.4625 17.0516C13.345 17.1927 13.1978 17.3061 13.0314 17.3839C12.8651 17.4617 12.6836 17.5019 12.5 17.5016C12.2079 17.5021 11.9249 17.4004 11.7 17.2141C11.5734 17.1091 11.4688 16.9803 11.3921 16.8348C11.3154 16.6894 11.2682 16.5303 11.2531 16.3665C11.238 16.2028 11.2553 16.0377 11.3041 15.8807C11.3529 15.7237 11.4322 15.5779 11.5375 15.4516L16.075 10.0016H1.25C0.91848 10.0016 0.600536 9.86987 0.366116 9.63545C0.131695 9.40103 0 9.08309 0 8.75156C0 8.42004 0.131695 8.1021 0.366116 7.86768C0.600536 7.63326 0.91848 7.50156 1.25 7.50156Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
