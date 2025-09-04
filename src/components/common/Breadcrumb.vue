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
  <nav class="flex items-center space-x-2 text-sm">
    <template v-for="(item, index) in items" :key="index">
      <div class="flex items-center">
        <!-- Breadcrumb link -->
        <a
          v-if="!item.current"
          :href="item.href"
          class="text-gray-500 hover:text-orange-500"
        >
          {{ item.label }}
        </a>

        <!-- Current page -->
        <span v-else class="text-orange-500 font-medium">
          {{ item.label }}
        </span>
      </div>

      <!-- Separator -->
      <ChevronRight
        v-if="index < items.length - 1"
        class="w-4 h-4 text-gray-400"
      />
    </template>
  </nav>
</template>
