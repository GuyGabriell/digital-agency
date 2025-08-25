<script setup>
defineProps({
  direction: { type: String, default: "left" }, // "left" or "right"
  href: { type: String, default: "#" },
});
</script>

<template>
  <a :href="href" class="inline-flex">
    <svg
      width="60"
      height="60"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="drop-shadow-md"
      :class="direction === 'right' ? 'rotate-180' : ''"
    >
      <circle cx="32" cy="32" r="24" fill="white" />
      <path
        d="M28 32L36 24M28 32L36 40"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</template>
