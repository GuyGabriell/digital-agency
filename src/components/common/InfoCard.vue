<script setup>
defineProps({
  tag: { type: String, default: "" },
  tagBg: { type: String, default: "" },
  bgColor: { type: String, default: "" },
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  link: { type: String, default: "" }, 
  showLink: { type: Boolean, default: true },
});
</script>

<template>
  <div
    class="rounded-2xl md:py-[64px] md:px-[37px] hover:shadow-2xl transition duration-300"
    :style="{ backgroundColor: bgColor }"
  >
    <!-- Tag -->
    <span
      class="px-3 py-1 rounded-md text-sm font-medium inline-block md:mb-[20px]"
      :class="tagBg"
    >
      {{ tag }}
    </span>

    <!-- Title -->
    <h3 class="font-semibold text-lg md:mb-[18px]">{{ title }}</h3>

    <!-- Description -->
    <p class="text-[#525252] text-sm leading-relaxed">
      {{ description }}
    </p>

    <!-- Read More -->
    <a
      v-if="link && showLink"
      :href="link"
      class="md:hidden text-[#DC7000] text-sm font-medium flex items-center gap-2 hover:underline justify-end md:flex hidden" 
    >
      Read more
      <span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.841477 7.31608C0.898762 7.32538 0.956735 7.32967 1.01474 7.32892L10.8915 7.32892L10.6761 7.42908C10.4656 7.52872 10.2741 7.66433 10.1101 7.82976L7.34046 10.5994C6.97569 10.9477 6.91439 11.5078 7.19521 11.9267C7.52205 12.373 8.14882 12.4699 8.5952 12.1431C8.63126 12.1167 8.66554 12.0879 8.69775 12.0569L13.7062 7.04844C14.0976 6.65747 14.098 6.02324 13.707 5.63183C13.7067 5.63158 13.7065 5.6313 13.7062 5.63105L8.69775 0.622584C8.30603 0.231956 7.6718 0.232831 7.28114 0.624556C7.2504 0.655389 7.2217 0.688194 7.19521 0.722753C6.91439 1.14162 6.97569 1.70178 7.34046 2.05L10.1051 4.82468C10.2521 4.97181 10.4211 5.09517 10.606 5.1903L10.9065 5.32553L1.06986 5.32553C0.558155 5.30653 0.109209 5.66398 0.0130777 6.16695C-0.0754786 6.71303 0.295399 7.22749 0.841477 7.31608Z"
            fill="#DC7000"
          />
        </svg>
      </span>
    </a>

    <!-- Mobile only (first card link) -->
    <a
      v-if="link && showLink"
      :href="link"
      class="text-[#DC7000] text-sm font-medium flex items-center gap-2 hover:underline justify-end md:hidden"
    >
      Read more
      <span>
         <svg
          width="12"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.841477 7.31608C0.898762 7.32538 0.956735 7.32967 1.01474 7.32892L10.8915 7.32892L10.6761 7.42908C10.4656 7.52872 10.2741 7.66433 10.1101 7.82976L7.34046 10.5994C6.97569 10.9477 6.91439 11.5078 7.19521 11.9267C7.52205 12.373 8.14882 12.4699 8.5952 12.1431C8.63126 12.1167 8.66554 12.0879 8.69775 12.0569L13.7062 7.04844C14.0976 6.65747 14.098 6.02324 13.707 5.63183C13.7067 5.63158 13.7065 5.6313 13.7062 5.63105L8.69775 0.622584C8.30603 0.231956 7.6718 0.232831 7.28114 0.624556C7.2504 0.655389 7.2217 0.688194 7.19521 0.722753C6.91439 1.14162 6.97569 1.70178 7.34046 2.05L10.1051 4.82468C10.2521 4.97181 10.4211 5.09517 10.606 5.1903L10.9065 5.32553L1.06986 5.32553C0.558155 5.30653 0.109209 5.66398 0.0130777 6.16695C-0.0754786 6.71303 0.295399 7.22749 0.841477 7.31608Z"
            fill="#DC7000"
          />
        </svg>
      </span>
    </a>
  </div>
</template>
