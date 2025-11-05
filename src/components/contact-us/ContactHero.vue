<script setup>
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import desktopmap from "@/assets/desktopmap.svg";
import mobilemap from "@/assets/mobilemap.svg";
import facebook from "/public/facebook.svg";
import insta from "/public/insta.svg";
import x from "/public/x.svg";
import linkedin from "/public/linkedin.svg";
import contact from "/public/contact.svg";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact", current: true },
];

defineProps({
  header: {
    type: String,
    default: "Lorem Ipsum is simply dummy text of the printing and.",
  },
  subheader: {
    type: String,
    default:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
});
</script>

<template>
  <div
    class="ml-[28px] md:ml-[170px] mr-[29px] md:mr-[130px] mb-[47px] md:mb-[103px]"
  >
    <!--heronews-->
    <div
      class="flex items-center justify-center mt-[62px] md:mt-[94px] mb-[33px] md:mb-[15px]"
    >
      <Breadcrumb :items="breadcrumbItems" />
    </div>

    <div class="text-center mb-[px] md:mt-[px]">
      <h1
        class="font-Poppins text-[25px] md:text-[33px] font-semibold mb-[33px] md:mb-[13px]"
      >
        {{ header }}
      </h1>
      <p
        class="font-Poppins text-[#898989] text-[12px] md:text-[16px] font-medium mb-[px] md:mb-[0px]"
      >
        {{ subheader }}
      </p>
    </div>

    <!--desktopMap-->
    <div class="mt-[87px] md:mt-[93px] mb-[79px] md:-0">
      <div class="px-0 md:px-[185px] hidden md:block">
        <img :src="desktopmap" alt="map" />
      </div>
      <div class="md:hidden block px-[23] md:px-[0]">
        <img :src="mobilemap" alt="map" />
      </div>
    </div>
  </div>

  <!-- socials/contact/address -->
  <div
    class="flex flex-col md:flex-row  md:justify-between pl-[28px] md:pl-[133px] pr-[20px] md:pr-[119px] mb-[76px] md:mb-[147px] font-Poppins text-[#333333] space-y-6 md:space-y-0"
  >
    <!-- desktop-Socials -->
    <div class="flex md:flex-col hidden md:block">
      <div class="w-[184px] mr-0 md:mr-[97px]">
        <h2 class="text-[14px] md:text-[16px] font-normal mb-2 md:mb-3">
          Follow us
        </h2>
        <div class="flex space-x-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="facebook" alt="Facebook" class="w-[35px] h-[35px]" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="insta" alt="Instagram" class="w-[35px] h-[35px]" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="x" alt="Twitter/X" class="w-[35px] h-[35px]" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="linkedin" alt="LinkedIn" class="w-[35px] h-[35px]" />
          </a>
        </div>
      </div>
    </div>

  

    <!-- Contact -->
    <div class="flex  md:border-l border-[#C2C2C2] h-[70px]">
      <div class="w-[221px] flex items-center space-x-3 md:ml-[105px] md:mr-[109px]">
        <img
          :src="contact"
          alt="Contact"
          class="w-[29px] h-[29px] object-cover"
        />
        <p class="text-[16px] md:text-[20px] font-light">+94 0000 00000</p>
      </div>
    </div>

     <!-- Divider -->
    <div
      class="md:hidden block border-b border-[#C2C2C2]"
    ></div>

    <!-- Address -->
    <div class="flex border-l-0 md:border-l border-[#C2C2C2] h-[70px]">
      <div class="w-[373px] flex space-x-3 items-center md:ml-[99px]">
        <img
          src="@/assets/icons /location.svg"
          alt="Location"
          class="w-[29px] h-[29px] object-cover"
        />
        <p class="text-[14px] md:text-[16px] font-light">
          but also the leap into electronic typesetting
        </p>
      </div>
    </div>

     <!-- Divider -->
    <div
      class="md:hidden  border-b border-[#C2C2C2]"
    ></div>

    <!-- mobile-Socials -->
    <div class="flex md:flex-col md:hidden">
      <div class="w-[184px] mr-0 md:mr-[97px]">
        <h2 class="text-[14px] md:text-[16px] font-normal mb-2 md:mb-3">
          Follow us
        </h2>
        <div class="flex space-x-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="facebook" alt="Facebook" class="w-[35px] h-[35px]" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="insta" alt="Instagram" class="w-[35px] h-[35px]" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="x" alt="Twitter/X" class="w-[35px] h-[35px]" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="linkedin" alt="LinkedIn" class="w-[35px] h-[35px]" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
