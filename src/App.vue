<script setup>
import CompanyInfo from "@/components/common/CompanyInfo.vue";
import Navbar from "@/components/common/Navbar.vue";
import NewsLetter from "@/components/common/NewsLetter.vue";
import Footer from "@/components/common/Footer.vue";
</script>

<template>
  <div>
    <CompanyInfo address="Company Address type here" phone="+94 000 00000" />
    <Navbar />

    <router-view />
    <!-- loads Home, About, Services, News, Contact -->

    <NewsLetter
      header="Join Our community"
      title="Stay in the loop"
      description1="Subscribe to receive the latest news and updates about TDA."
      description2="We promise not to spam you!"
      buttonText="continue"
      @submit="handleNewsletterSubmit"
    />
    <!-- <Footer /> -->
    <Footer
      logoText="LOGO"
      email="@Company.com"
      phone="+9000 0000 000"
      :links="[
        { name: 'Company', href: '/company' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact us', href: '/contact' },
      ]"
      :socialLinks="[
        { name: 'facebook', href: 'https://facebook.com', icon: 'Facebook' },
        { name: 'instagram', href: 'https://instagram.com', icon: 'Instagram' },
        { name: 'twitter', href: 'https://twitter.com', icon: 'Twitter' },
        { name: 'linkedin', href: 'https://linkedin.com', icon: 'Linkedin' },
      ]"
    />
  </div>
</template>
