<script setup>
import CompanyInfo from "@/components/common/CompanyInfo.vue";
import Navbar from "@/components/common/Navbar.vue";

//import Footer from "@/components/common/Footer.vue";
</script>

<template>
  <div>
    <CompanyInfo address="Company Address type here" phone="+94 000 00000" />
    <Navbar />

    <router-view />
    <!-- loads Home, About, Services, Contact -->

    <Footer />
  </div>
</template>
