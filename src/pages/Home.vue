<script setup>
import HeroSection from "@/components/home/HeroSection.vue";
import IntroSection from "@/components/home/IntroSection.vue";
import ServicesSection from "@/components/home/ServicesSection.vue";
import FeaturesSection from "@/components/home/FeaturesSection.vue";
import ProjectsSection from "@/components/home/ProjectsSection.vue";
import TestimonialSection from "@/components/home/TestimonialSection.vue";
import NewsLetter from "@/components/common/NewsLetter.vue";
import Footer from "@/components/common/Footer.vue";

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
    <NewsLetter
      header="Join Our community"
      title="Stay in the loop"
      description1="Subscribe to receive the latest news and updates about TDA."
      description2="We promise not to spam you!"
      buttonText="continue"
      @submit="handleNewsletterSubmit"
    />
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
