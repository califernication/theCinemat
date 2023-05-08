<template>
    <swiper
      :modules="modules"
      :slides-per-view="'auto'"
      :space-between="50"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="swiper-slide"><img src="../images/annelise+camera.jpg"></swiper-slide>
      <swiper-slide class="swiper-slide"><img src="../images/charlie+Jonas.jpg"></swiper-slide>
      <swiper-slide class="swiper-slide"><img src="../images/ciara+slate-1.jpg"></swiper-slide>
      <swiper-slide class="swiper-slide"><img src="../images/eli+slate.jpg"></swiper-slide>
      <swiper-slide class="swiper-slide"><img src="../images/Emily+light.jpg"></swiper-slide>
      <swiper-slide class="swiper-slide"><img src="../images/Renee+looking+at+monitor.jpg"></swiper-slide>
    </swiper>
</template>

<style>
.swiper-slide {
    /* position: absolute !important; */
    width: 110vh !important;
    height: 100% !important;
    /* z-index: 50; */
}
</style>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles
export default {
    components: {
    Swiper,
    SwiperSlide,
    },
    setup() {
    const onSwiper = (swiper) => {
        console.log(swiper);
    };
    const onSlideChange = () => {
        console.log('slide change');
    };
    return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
    },
};
</script>