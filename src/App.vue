<script setup>
import CompanyInfo from "./components/CompanyInfo.vue";
import Navbar from "./components/Narbar.vue";
import PrimaryButton from "./components/PrimaryButton.vue";
import Card from "./components/Card.vue";
import HeroSection from "./components/pages/HeroSection.vue";
import IntroSection from "./components/pages/IntroSection.vue";
import ServicesSection from "./components/pages/ServicesSection.vue";
import FeaturesSection from "./components/pages/FeaturesSection.vue";
import ProjectsSection from "./components/pages/ProjectsSection.vue"; 



</script>

<template>
  <header>
    <CompanyInfo address="Company Address type here" phone="+94 000 00000" />
    <Navbar />
  </header>
  <main>
    <HeroSection />
    <IntroSection />
    <ServicesSection />
    <FeaturesSection />
    <ProjectsSection />
   
 

  </main>
</template>
