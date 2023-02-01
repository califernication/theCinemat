<template>
  <!-- Photo Carousel -->
    <!-- <swiper
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
      <swiper-slide><img src="../images/sample1.jpeg"></swiper-slide><swiper-slide class="swiper-slide"><img src="../images/sample2.jpeg" class="swiper-slide"></swiper-slide
      ><swiper-slide><img src="../images/sample3.png"></swiper-slide>
    </swiper> -->


    <!-- <div id="app" class="container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="media in medias" class="swiper-slide">
            <video-player src="https://firebasestorage.googleapis.com/v0/b/thecinemat-3606a.appspot.com/o/incoherenceWebsiteMP4.mp4?alt=media&token=a1166e5d-4902-4a50-975a-d2667fbaf7d9" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div> -->

    <!-- Video Carousel -->
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
    <div class="swiper-slide">
      <video-player :options="videoOptions" />
      <!-- <svg class="absolute block top-64 -right-20 z-10 h-full w-70 rotate-45 text-white opacity-60" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="100,0 50,40 0,70 0,60" />
      </svg> -->
      <div v-auto-animate class="card absolute w-50 bottom-5 left-[570px] bg-primary text-primary-content">
        <div class="card-body p-4">
          <h1 class="card-title italic text-md">Incoherence</h1>
          <p class=" text-xs">Dir. Emily Rodriguez</p>
        </div>
      </div>
    </div>
    <!-- <div class="swiper-slide">
      <img src="../images/sample2.jpeg" class="swiper-slide">
    </div> -->
    </swiper>
  </template>



  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  import videojs from "video.js";
  import "video.js/dist/video-js.css"
  import "../styles/videojs.css"

  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/pagination";
  
//   import custome styles
  import "../styles/carousel.css"
  
  // import required modules
  import { Pagination, Autoplay } from "swiper";
  import VideoPlayer from "@/components/VideoPlayer.vue";

  let medias = [
  { id: 'media1', type: 'video', src: "https://firebasestorage.googleapis.com/v0/b/thecinemat-3606a.appspot.com/o/incoherenceWebsiteMP4.mp4?alt=media&token=a1166e5d-4902-4a50-975a-d2667fbaf7d9" },
]
  
  // export default {
  //   components: {
  //     Swiper,
  //     SwiperSlide,
  //   },
  //   setup() {
  //     return {
  //       modules: [Autoplay],
  //     };
  //   },
  // };
  export default {
    name: 'VideoExample',
    components: {
      VideoPlayer
    },
    data() {
      return {
        videoOptions: {
          autoplay: 'muted',
          controls: false,
          loop: true,
          sources: [
            {
              src:
                'https://firebasestorage.googleapis.com/v0/b/thecinemat-3606a.appspot.com/o/incoherenceWebsiteMP4.mp4?alt=media&token=9fa7e0a1-52d0-420d-a2f0-0d9240b1e386',
                type: 'video/mp4'
            }
          ]
        }
      };
    }
  };
  </script>
  
