<script setup>
import HeroSection from "@/components/home/HeroSection.vue";
import IntroSection from "@/components/home/IntroSection.vue";
import ServicesSection from "@/components/home/ServicesSection.vue";
import FeaturesSection from "@/components/home/FeaturesSection.vue";
import ProjectsSection from "@/components/home/ProjectsSection.vue";
import TestimonialSection from "@/components/home/TestimonialSection.vue";


const handleNewsletterSubmit = (email) => {
  console.log("User subscribed with email:", email);
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
  </div>
</template>
