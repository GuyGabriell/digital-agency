<script setup>
defineProps({
  text: String,
  customClass: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <button 
   :class="`bg-white text-black px-6 py- ${customClass}`"
  >
    {{ text }}
  </button>
</template>