<script setup>
defineProps({
  address: { type: String, default: "Company Address type here" },
  phone: { type: String, default: "+94 000 00000" },
});
</script>
<template>
  <div
    class="hidden md:flex py-0.5 bg-white text-[#1A1A1A] flex justify-end items-center gap-10 pr-[90px]"
  >
    <div class="flex items-center gap-2.5">
      <slot name="location-icon">
        <img
          src="@/assets/icons /location.svg"
          alt="Location"
          class="h-4 w-4"
        />
      </slot>
      <span class="text-xs font-Poppins">{{ address }}</span>
    </div>
    <div class="flex items-center gap-2.5">
      <slot name="phone-icon">
        <img src="@/assets/icons /phone.svg" alt="Phone" class="h-4 w-4" />
      </slot>
      <span class="text-xs font-Poppins">{{ phone }}</span>
    </div>
  </div>
</template>
