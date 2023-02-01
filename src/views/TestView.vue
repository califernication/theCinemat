<template>
  <div>
    <video-player :options="videoOptions" />
  </div>
</template>

<script setup>
  import videojs from "video.js";
  import "video.js/dist/video-js.css"
  import "../styles/videojs.css"

  import VideoPlayer from "@/components/VideoPlayer.vue";

let medias = [
{ id: 'media1', type: 'video', src: "https://firebasestorage.googleapis.com/v0/b/thecinemat-3606a.appspot.com/o/incoherenceWebsiteMP4.mp4?alt=media&token=a1166e5d-4902-4a50-975a-d2667fbaf7d9" },
]
</script>