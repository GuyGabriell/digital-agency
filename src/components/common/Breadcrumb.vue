<script setup>
import { defineProps } from "vue";
import { ChevronRight } from "lucide-vue-next"; // arrow icon

// Props to make it reusable
const props = defineProps({
  items: {
    type: Array,
    default: () => [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about", current: true },
    ],
  },
});
</script>

<template>
  <nav class="flex items-center space-x-2 text-[12px]">
    <template v-for="(item, index) in items" :key="index">
      <div class="flex items-center">
        <!-- Breadcrumb link -->
        <a
          v-if="!item.current"
          :href="item.href"
          class="text-[#848484] hover:text-[#FB9E3C] font-Poppins"
        >
          {{ item.label }}
        </a>

        <!-- Current page -->
        <span v-else class="text-[#FB9E3C] font-normal font-Poppins">
          {{ item.label }}
        </span>
      </div>

      <!-- Separator -->
      <ChevronRight
        v-if="index < items.length - 1"
        class="w-4 h-4 text-[#848484]"
      />
    </template>
  </nav>
</template>
