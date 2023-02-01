<template>
    <!-- TODO: fix z-values -->
    <div class="flex flex-col relative bg-gray-50 overflow-visible">
      <!-- FIRST PAGE -->
      <div class="w-screen h-screen">
        <div class="relative">
          <img class="z-50 absolute block xl:inline my-" src="../assets/inverted-logo.svg" alt=""/>
          <Carousel class="" />
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
  </template>
  
  <script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { MenuIcon, XIcon } from '@heroicons/vue/outline'
  import Carousel from '../components/AltCarousel.vue';
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