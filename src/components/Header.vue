<template>
  <div class="idk"></div>
  <div class="app-main z-30">
    <Popover class="relative bg-white z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span class="sr-only">Workflow</span>
              <img class="h-8 w-auto sm:h-10" src="../assets/inverted-icon.svg" alt="" />
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-light">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" class="hidden md:flex space-x-10">
            <Popover class="relative" v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light']">
                <span>Opportunities</span>
                <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <div>
                  <PopoverPanel class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a v-for="item in opportunities" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-primary-light" aria-hidden="true" />
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">
                              {{ item.name }}
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              {{ item.description }}
                            </p>
                          </div>
                        </a>
                      </div>
                      <!-- TODO: deprecated "calls to action" -->
                      <!-- <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                          <a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                            <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                            <span class="ml-3">{{ item.name }}</span>
                          </a>
                        </div>
                      </div> -->
                    </div>
                  </PopoverPanel>
                </div>
              </transition>
            </Popover>

            <a href="/screenings" class="text-base font-medium text-gray-500 hover:text-gray-900"> Screenings </a>
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Workshops </a>
            <!-- About -->
            <a href="/about" class="text-base font-medium text-gray-500 hover:text-gray-900"> About </a>

            <!-- More -->
            <!-- <Popover class="relative" v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light']">
                <span>More</span>
                <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <div>
                  <PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a v-for="item in resources" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-primary-light" aria-hidden="true" />
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">
                              {{ item.name }}
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              {{ item.description }}
                            </p>
                          </div>
                        </a>
                      </div>
                      <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                        <div>
                          <h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                          <ul role="list" class="mt-4 space-y-4">
                            <li v-for="post in recentPosts" :key="post.id" class="text-base truncate">
                              <a :href="post.href" class="font-medium text-gray-900 hover:text-gray-700">
                                {{ post.name }}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="mt-5 text-sm">
                          <a href="#" class="font-medium text-primary-light hover:text-primary-light"> View all posts <span aria-hidden="true">&rarr;</span></a>
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </div>
              </transition>
            </Popover> -->
          </PopoverGroup>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a v-if="store.getters.user.loggedIn === false" @click="signInWithGoogle" href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-light hover:bg-primary"> Log-in with netID </a>
            <Popover v-else class="relative" v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light']">
                <img :src="store.getters.userPhotoURL" referrerpolicy="no-referrer" class="h-10 w-10 rounded-full" />
                <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <div>
                  <PopoverPanel class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a v-for="item in userOptions" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-primary-light" aria-hidden="true" />
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">
                              {{ item.name }}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </PopoverPanel>
                </div>
              </transition>
            </Popover>
          </div>
        </div>
      </div>

      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <div>
          <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                  <div>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-primary-light.svg" alt="Workflow" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-light">
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="mt-6">
                  <nav class="grid gap-y-8">
                    <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-primary-light" aria-hidden="true" />
                      <span class="ml-3 text-base font-medium text-gray-900">
                        {{ item.name }}
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div class="py-6 px-5 space-y-6">
                <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>

                  <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>
                  <a v-for="item in resources" :key="item.name" :href="item.href" class="text-base font-medium text-gray-900 hover:text-gray-700">
                    {{ item.name }}
                  </a>
                </div>
                <div>
                  <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary"> Sign up </a>
                  <p class="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    {{ ' ' }}
                    <a href="#" class="text-primary-light hover:text-primary-light"> Sign in </a>
                  </p>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </div>
      </transition>
    </Popover>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  VideoCameraIcon,
SparklesIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'
// import { onMounted, ref, onBeforeMount } from 'vue';
import { signInWithGoogle } from "../firebase/index.js"
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase/index.js"
import store from "../store"


// var user = ref(null)
// onAuthStateChanged(auth, (us) => {
//     if (us) {
//       console.log(us)
//       console.log('user is signed in')
//       user.value = us
//     } else {
//       console.log('user is signed out')
//       user.value = null
//     }
//   });
// onBeforeMount(() => {
//   onAuthStateChanged(auth, (us) => {
//     if (us) {
//       console.log(us)
//       console.log('user is signed in')
//       user.value = us
//     } else {
//       console.log('user is signed out')
//       user.value = null
//     }
//   });
// })
const userOptions = [
  { name: 'Add a production', href: '/create' },
  { name: 'View/edit your productions', href: '#' },
  { name: 'Sign out', href: '#' },
]

const opportunities = [
  {
    name: 'For Filmmakers',
    description: 'Get involved with a set and get some real-world experience.',
    href: '/opportunities/filmmakers',
    icon: VideoCameraIcon,
  },
  {
    name: 'For Actors',
    description: 'Make your on-screen debut.',
    href: '/opportunities/actors',
    icon: SparklesIcon,
  }
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]
</script>