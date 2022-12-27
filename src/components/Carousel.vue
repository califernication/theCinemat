<template>
    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="../images/sample1.jpeg"></swiper-slide><swiper-slide><img src="../images/sample2.jpeg"></swiper-slide
      ><swiper-slide><img src="../images/sample3.png"></swiper-slide>
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/pagination";
  
//   import custome styles
  import "../styles/carousel.css"
  
  // import required modules
  import { Pagination, Autoplay } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Autoplay],
      };
    },
  };
  </script>
  
