<script setup>
import NewsHeadlLine from "@/components/news/NewsHeadlLine.vue";
import NewsIntro from "@/components/news/NewsIntro.vue";
</script>

<template>
  <div>
    <NewsHeadlLine />
    <NewsIntro
      image="/images/news-pic.jpg"
      author="John Smash"
      time="5min"
      title="Lorem Ipsum is simply dummy text dummy text"
      descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
      descriptionTwo="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    />
  </div>
</template>
