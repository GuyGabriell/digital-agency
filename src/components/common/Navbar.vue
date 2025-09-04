<script setup>
import { ref } from "vue";
import PrimaryButton from "./PrimaryButton.vue";
const isOpen = ref(false);
const links = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "News", href: "/news" },
];
</script>
<template>
  <nav class="h-[px] bg-[#E47500] py-4 text-white px-[20px] md:px-[63px]">
    <div class="md:max-w-[1440px] mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="text-[25px] font-bold font-Poppins">LOGO</div>
      <!-- Hamburger (Mobile Only) -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden flex flex-col gap-[4px] focus:outline-none"
      >
        <span class="block rounded-md w-5 h-[3px] bg-white"></span>
        <span class="block rounded-md w-5 h-[3px] bg-white ml-2"></span>
        <span class="block rounded-md w-5 h-[3px] bg-white"></span>
      </button>
      <!-- Links + Contact Us (Desktop) -->
      <div
        class="hidden md:flex items-center gap-10 text-base font-normal font-Poppins"
      >
        <RouterLink
          v-for="link in links"
          :key="link.name"
          :to="link.href"
          v-slot="{ isActive }"
        >
          <span
            class="flex items-center gap-2 hover:text-gray-600"
            :class="isActive ? 'text-white font-semibold' : ''"
          >
            <!-- Circle indicator (only when active) -->
            <span
              v-if="isActive"
              class="w-3 h-3 rounded-full bg-white"
            ></span>
            {{ link.name }}
          </span>
        </RouterLink>

        <!-- Contact button stays untouched -->
        <RouterLink to="/contact">
          <PrimaryButton
            text="Contact Us"
            customClass="bg-[#E47500] !text-[#DC7000] !text-[13px] !w-full !font-Poppins"
          />
        </RouterLink>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="md:hidden block mt-4 flex flex-col gap-4 bg-[#E47500] px-10 py-3 rounded-b-lg"
    >
      <RouterLink
        v-for="link in links"
        :key="link.name"
        :href="link.href"
        class="hover:text-gray-600"
      >
        {{ link.name }}
      </RouterLink>
      <RouterLink to="/contact">
        <PrimaryButton
          text="Contact Us"
          customClass="bg-[#E47500] !text-[#DC7000] !text-[13px] !w-full !font-Poppins"
        />
      </RouterLink>
    </div>
  </nav>
</template>
