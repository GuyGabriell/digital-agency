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
   :class="`bg-white text-black px-5 py-2 rounded-lg  ${customClass}`"
  >
     <slot>{{ text }}</slot>
  </button>
</template>