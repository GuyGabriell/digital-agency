<script setup>
import HeroSection from "@/components/home/HeroSection.vue";
import IntroSection from "@/components/home/IntroSection.vue";
import ServicesSection from "@/components/home/ServicesSection.vue";
import FeaturesSection from "@/components/home/FeaturesSection.vue";
import ProjectsSection from "@/components/home/ProjectsSection.vue";
import TestimonialSection from "@/components/home/TestimonialSection.vue";
import NewsLetter from "@/components/common/NewsLetter.vue";

const handleNewsletterSubmit = (email) => {
  console.log("User subscribed with email:", email);
  // 👉 Do your API call, save to DB, etc.
};
</script>

<template>
  <div>
    <HeroSection />
    <IntroSection />
    <ServicesSection />
    <FeaturesSection />
    <ProjectsSection />
    <TestimonialSection />
    <NewsLetter
      header="Lorem Ipsum"
      title="Stay in the loop"
      description1="Subscribe to receive the latest news and updates about TDA."
      description2="We promise not to spam you!"
      buttonText="continue"
      @submit="handleNewsletterSubmit"
    />
  </div>
</template>
