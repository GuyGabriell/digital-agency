<script setup>
import { ref } from "vue";
import TestimonialCard from "./TestimonialCard.vue";

const testimonials = [
  {
    avatar: "/images/avatar1.jpg",
    name: "Vizeh Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    avatar: "/images/avatar2.jpg",
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: 4.5,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    avatar: "/images/avatar3.jpg",
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: 4.5,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const activeIndex = ref(0);

function next() {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length;
}
function prev() {
  activeIndex.value =
    (activeIndex.value - 1 + testimonials.length) % testimonials.length;
}
</script>

<template>
  <section class="bg-gray-50 py-16">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
        Trusted by Thousands of <br class="hidden md:block" />
        Happy Customer
      </h2>
      <p class="mt-3 text-gray-500 max-w-xl mx-auto">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div
        class="mt-10 flex flex-col md:flex-row gap-6 justify-center items-stretch"
      >
        <TestimonialCard
          v-for="(t, i) in testimonials"
          :key="i"
          v-bind="t"
          :active="i === activeIndex"
        />
      </div>

      <!-- Pagination dots -->
      <div class="flex justify-center mt-6 space-x-2">
        <button
          v-for="(dot, i) in testimonials.length"
          :key="i"
          class="w-3 h-3 rounded-full"
          :class="i === activeIndex ? 'bg-orange-500' : 'bg-gray-300'"
          @click="activeIndex = i"
        />
      </div>

      <!-- Prev / Next arrows -->
      <div class="flex justify-center mt-6 gap-4">
        <button
          @click="prev"
          class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition"
        >
          <span class="sr-only">Previous</span>
          ‹
        </button>
        <button
          @click="next"
          class="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition"
        >
          <span class="sr-only">Next</span>
          ›
        </button>
      </div>
    </div>
  </section>
</template>
