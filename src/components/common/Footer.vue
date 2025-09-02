<script setup>
import { defineProps } from "vue";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-vue-next"; // icons

const props = defineProps({
  logoText: { type: String, default: "LOGO" },
  description: {
    type: String,
    default:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  email: { type: String, default: "@Company.com" },

  links: {
    type: Array,
    default: () => [
      { name: "Company", href: "#" },
      { name: "Portfolio", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact us", href: "#" },
    ],
  },

  contactText: {
    type: String,
    default:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },

  phone: { type: String, default: "+9000 0000 000" },

  socialLinks: {
    type: Array,
    default: () => [
      { name: "facebook", href: "#", icon: "Facebook" },
      { name: "instagram", href: "#", icon: "Instagram" },
      { name: "twitter", href: "#", icon: "Twitter" },
      { name: "linkedin", href: "#", icon: "Linkedin" },
    ],
  },

  copyright: {
    type: String,
    default: "Copyright ® 2021 Company All rights Rcerved",
  },
});

// Map icon names to imported components
const iconMap = { Facebook, Instagram, Twitter, Linkedin };
</script>

<template>
  <footer class="bg-[#1B1B1B] text-[#D2D2D2]">
    <div
      class="max-w-[1440px] mx-auto md:pl-[101px] md:pr-[120px] md:pt-[79px] grid md:grid-cols-4 gap-8"
    >
      <!-- Logo & Description -->
      <div class="w-[372px]">
        <h2 class="md:text-[25px] font-Poppins font-bold">{{ logoText }}</h2>
        <p class="text-[16px] text-white font-Poppins font-normal md:mt-[20px] ">
          {{ description }}
        </p>
        <p class="md:mt-[25px] text-[16px] text-white font-Poppins font-normal">
          {{ email }}
        </p>
      </div>

      <!-- Links -->
      <div class="md:pl-[78px]">
        <h2
          class="text-white font-Poppins font-medium text-[17px]  md:mb-[15px]"
        >
          About us
        </h2>
        <div class="space-y-2 font-normal text-[16px] text-white font-Poppins">
          <div v-for="link in links" :key="link.name">
            <a :href="link.href" class="transition">{{ link.name }}</a>
          </div>
        </div>
      </div>

      <!-- Contact us -->
      <div class="">
        <h3 class="text-white font-Poppins font-medium text-[17px]  md:mb-[15px]">Contact us</h3>
        <p class="md:mt-[px] text-[16px] text-white font-Poppins font-normal">
          {{ contactText }}
        </p>
        <p class="md:mt-[24px] text-[16px] text-white font-Poppins font-normal">
          {{ phone }}
        </p>
      </div>

      <div>
        <!-- Social Media -->
        <div class="flex gap-4 mt-[120px]">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full bg-white text-black transition"
          >
            <component :is="iconMap[social.icon]" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <!-- Copyright -->
    <div class="border-t md:mt-[53px] flex justify-center text-center py-[29px] text-white font-Poppins font-normal text-[13px]">
      {{ copyright }}
    </div>
  </footer>
</template>
