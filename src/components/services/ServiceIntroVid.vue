<script setup>
import { ref } from "vue";
import { CheckCircle2, Play } from "lucide-vue-next";

const videoSrc = "public/images/introvid.png";
const title = "Lorem Ipsum is simply dummy text.";
const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy.";
const items = [
  "Lorem Ipsum is simply",
  "Lorem Ipsum is simply",
  "Lorem Ipsum is simply",
  "Lorem Ipsum is simply",
];

const showModal = ref(false);
function openVideo() {
  showModal.value = true;
}
</script>

<template>
  <section>
    <div
      class="md:max-w-[1254px] px-4 md:pl-[109px] md:pr-[146px] py-12 md:py-20 mb-10 md:mb-[100px] flex flex-col md:flex-row items-center gap-[85px]"
    >
      <!-- Left: Image with play button -->
      <div
        class="relative w-full md:w-[669px] md:h-[354px] rounded-[5px] overflow-hidden"
      >
        <img
          :src="videoSrc"
          alt="Video preview"
          class="w-full h-full object-cover"
        />
        <button
          @click="openVideo"
          class="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
        >
          <Play class="w-8 h-8 text-white" />
        </button>
      </div>

      <!-- Right: Text and checklist -->
      <div class="w-full md:w-1/2 space-y-5">
        <h2 class="text-2xl md:text-3xl font-semibold font-Poppins">
          {{ title }}
        </h2>
        <p class="text-[#525252] leading-relaxed font-Poppins">
          {{ description }}
        </p>
        <ul class="space-y-3">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="flex items-center text-[#525252] font-Poppins"
          >
            <CheckCircle2
              class="bg-[#2FAB73] text-white rounded-full w-5 h-5 mr-2"
            />
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Video modal -->
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      >
        <div class="bg-transparent p-4 rounded-xl max-w-xl w-full relative">
          <button
            @click="showModal = false"
            class="absolute top-3 right-3 text-gray-500"
          >
            ✕
          </button>
          <iframe
            class="w-full h-64 md:h-96 rounded-md border-0 outline-none"
            style="border: none; outline: none;"
            src="https://www.youtube.com/embed/SfMT4Agg8Xw"
            title="Video player"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
