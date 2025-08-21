<script setup>
import CompanyInfo from './components/CompanyInfo.vue'
import Navbar from './components/Narbar.vue'
import PrimaryButton from "./components/PrimaryButton.vue";
import HeroSection from "./components/pages/HeroSection.vue";

</script>

<template>

<header>
     <CompanyInfo 
      address="Company Address type here" 
      phone="+94 000 00000" 
    />
    <Navbar />
</header>
<main>
  <HeroSection />
  
</main>

</template>

