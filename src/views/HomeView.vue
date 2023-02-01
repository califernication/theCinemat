<template>
  <!-- TODO: fix z-values -->
  <div class="relative bg-gray-50 overflow-hidden">
    <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
      <div class="relative h-full max-w-7xl mx-auto">
        <svg class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
        </svg>
      </div>
    </div>

    <div class="relative">
      <!-- create a flex container so that the title and carousel can be side by side -->
      <div class="flex flex-wrap justify-center lg:justify-start lg:flex-nowrap min-h-[1000px] lg:min-h-[500px] ">
        <main class="absolute z-20 mt-16 px-4 sm:mt-24 max-w-xl lg:ml-16 xl:ml-36 pt-6 pb-16 sm:pb-24">
          <div class="text-center">
            <h1 class="">
              <img class="block xl:inline" src="../assets/inverted-logo.svg" alt=""/>
            </h1>
            <p class="pt-6 mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Yale University’s only student-led production company with the mission to provide a hands-on education in the craft of filmmaking.</p>
            <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div class="rounded-md shadow">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-light hover:bg-primary md:py-4 md:text-lg md:px-10"> Join a set </a>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-light bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"> Attend a workshop </a>
              </div>
            </div>
          </div>
        </main>
        <div class="w-1/2 dummylol"></div>
        <div class="flex lg:w-1/2">
          <div>
            <svg class="hidden lg:block absolute z-10 h-full w-40 text-gray-50" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="0,0 100,0 50,100 0,100" />
            </svg>
            <svg class="hidden lg:block absolute z-10 h-full w-40 text-gray-50" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <!-- fill in corner -->
            <!-- <svg class="hidden lg:block absolute z-10 h-full w-64 text-gray-50" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg> -->
          </div>
          <Carousel class="w-screen" />
        </div>


      </div>
    </div>
    <!-- SECOND PAGE -->
    <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
      <div class="relative sm:py-16 lg:py-0">
        <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
          <div class="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
          <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
          </svg>
        </div>
        <div class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
          <!-- Testimonial card-->
          <div class=" z-10 relative overflow-hidden rounded-2xl shadow-xl">
            <CarouselBTS class="z-0"/>
          </div>
        </div>
      </div>
      
      <div class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
        <!-- Content area -->
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">On a mission to empower students</h2>
          <div class="mt-6 space-y-6 text-gray-500">
            <p class="text-lg">The Cinemat is more than a student organization. It’s a social enterprise.</p>
            <p class="text-base leading-7">Our model prioritizes mentorship, community, and kindness. The base of our programming starts around technical workshops, providing educational equity to all our members.</p>
            <p class="text-base leading-7">As members increase their technical skills, our programming expands to provide on-set opportunities through the production of narrative short films. Members get hands-on experience working on a film set and get the opportunity to participate on our own the 24-hour film festival.</p>
            <p class="text-base leading-7">We also collaborate with local non-profits to create videos that raise awareness about important social issues. This provides members with an opportunity to apply their technical skills to make a positive impact on the community while also learning about the non-profits' mission.</p>
            <p class="text-base leading-7">Want to join the movement? </p>
          </div>
        </div>

        <!-- Stats section -->
        <div class="mt-10">
          <div class="mt-10">
            <a href="#" class="text-base font-medium text-indigo-600">
              Learn more about membership
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative bg-gray-50 py-16 sm:py-24">
    
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import Carousel from '../components/Carousel.vue';
import CarouselBTS from '../components/CarouselBTS.vue'
import videojs from 'video.js';
// import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

</script>