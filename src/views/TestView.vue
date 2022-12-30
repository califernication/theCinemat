<!-- <template>
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide><img src="../images/sample1.jpeg"></swiper-slide><swiper-slide>Slide 2</swiper-slide
      ><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide
      ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
      ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
      ><swiper-slide>Slide 9</swiper-slide>
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/navigation";

  
  // import required modules
  import { Navigation } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
  </script>
   -->

   <template>
    <div class="">
      <video-player :options="videoOptions" />
      <!-- <video-player src="https://console.firebase.google.com/u/0/project/thecinemat-3606a/storage/thecinemat-3606a.appspot.com/files" /> -->
    </div>
  </template>
  
  <script>
  import VideoPlayer from '@/components/VideoPlayer.vue';
  import "video.js/dist/video-js.css"
  import "../styles/videojs.css"
  
  export default {
    name: 'VideoExample',
    components: {
      VideoPlayer
    },
    data() {
      return {
        videoOptions: {
          autoplay: true,
          controls: true,
          sources: [
            {
              src:
                'https://firebasestorage.googleapis.com/v0/b/thecinemat-3606a.appspot.com/o/incoherenceWebsiteMP4.mp4?alt=media&token=a1166e5d-4902-4a50-975a-d2667fbaf7d9',
                type: 'video/mp4'
            }
          ]
        }
      };
    }
  };
  </script>