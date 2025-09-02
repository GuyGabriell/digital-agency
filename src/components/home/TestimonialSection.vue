<script setup>
import images from "/public/images/testimonial-pic.png";
import SecondaryButton from "../common/SecondaryButton.vue";

const testimonial = {
  image: images,
  description1:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  description2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  link: "#",
  buttonText: "Read more",
};

function handleReadMore() {
  console.log("Read more clicked!");

}
</script>

<template>
  <section>
    <div
      class="md:max-w-[1254px] md:h-[464px] mx-auto md:pl-[59px] md:mb-[176px] md:pr-[127px] flex flex-col md:flex-row items-center"
    >
      <!-- image-desktop -->
      <img
        :src="testimonial.image"
        alt="Testimonial"
        class="hidden md:block md:w-[600px] md:h-[488px] object-cover"
      />

      <div
        class="w-[331px] pb-[px] px-2 md:w-[536px] md:mt-[37px] md:ml-[50px] font-Poppins"
      >
        <!--desktop-->
        <h3 class="w-[472px] md:text-[30px] leading-snug font-Poppins font-medium mb-[43px] mt-[px] hidden md:block">
          Lorem Ipsum is simply dummy <br> text dummy text
        </h3>
        <!--mobile-->
      <h1 class="text-[22px] leading-snug font-Poppins font-normal mb-[34px] md:hidden block ">
        Lorem Ipsum is simply <br> dummy <br> text dummy text
      </h1>

        <p
          class="text-[13px] leading-snug md:text-[17px] font-Poppins leading-[100%] font-normal text-[#515151] mb-[18px] md:mb-[18px]"
        >
          {{ testimonial.description1 }}
        </p>

        <p 
          class="text-[12px] md:text-[17px] font-Poppins leading-snug font-normal text-[#515151] mb-[46px] md:mb-[46px]"
        >
          {{ testimonial.description2 }}
        </p>

        <!-- button -->
        <a :href="testimonial.link" @click.prevent="handleReadMore">
          <SecondaryButton
            :text="testimonial.buttonText"
            customClass="!bg-[#DC7000] !text-white !text-base !font-medium !font-Poppins !px-6 !py-2"
          />
        </a>
      </div>

      <!-- image-mobile -->
      <img
        :src="testimonial.image"
        alt="Testimonial"
        class="md:hidden mt-[66px] px-[34px] object-cover"
      />
    </div>
  </section>
</template>
