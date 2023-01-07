

<!-- Create a slate of all past projects -->

<template>
    <div class="flex flex-col w-full px-20 sm:px-28 md:px-44 lg:px-72 mt-14 gap-4">
        <h1 class="text-primary text-5xl font-semibold underline tacking-wide">Cinemat-Sponsored Projects</h1>
        <p class="text-md text-gray-500">The Cinemat position packets provide information about the responsibilities and guidelines for various Cinemat production roles. If you click the chevron symbol next to a packet, you can learn more about the role. You can also click on the packet to open it in a new tab. If you have any issues accessing the packets or if you want information about a role that is not listed, please contact thecinemat@yale.edu.</p>
    </div>
    <!-- <div class="flex justify-center">
      <div class="w-full max-w-md px-2 py-16 sm:px-0">
        <TabGroup>
          <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            <Tab
              v-for="category in Object.keys(categories)"
              as="template"
              :key="category"
              v-slot="{ selected }"
            >
              <button
                :class="[
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                ]"
              >
                {{ category }}
              </button>
            </Tab>
          </TabList>

          <TabPanels class="mt-2">
            <TabPanel
              v-for="(posts, idx) in Object.values(categories)"
              :key="idx"
              :class="[
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              ]"
            >
              <ul>
                <li
                  v-for="post in posts"
                  :key="post.id"
                  class="relative rounded-md p-3 hover:bg-gray-100"
                >
                  <h3 class="text-sm font-medium leading-5">
                    {{ post.id + ". " + post.title }}
                  </h3>
                </li>
              </ul>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div> -->
    <div class="mx-auto max-w-7xl py-2 px-6 lg:px-20 lg:py-4">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="lg:col-span-3">
          <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
            <li v-for="film in films" :key="film.title">
              <div class="card space-y-4 p-8 shadow-xl">
                <h2 class="font-bold text-5xl text-center mt-4 tracking-tighter">
                    {{ film.title }}
                </h2>
                <div class="divider mb-4  mx-20"></div>
                <div class="aspect-w-3 aspect-h-2">
                  <iframe v-if="film.embededLink" class="aspect-w-3 aspect-h-2">
                    {{ film.embededLink }}
                  </iframe>
                  <img v-else class="rounded-lg object-cover shadow-lg" src="../images/sucession.jpg" alt="" />
                </div>
                <div class="text-primary space-y-1 leading-6">
                  <h3 class="font-medium text-lg">{{ film.director }}</h3>
                  <p class="text-primary-light text-md">Principal Photography: {{ film.shootStart }} to {{ film.shootEnd }}</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">{{ film.tagline }}</p>
                </div>

                <!-- Crew -->
                <div v-auto-animate class="space-y-1">
                    <Disclosure>
                        <DisclosureButton class="flex w-full justify-between rounded-lg bg-primary-light px-4 py-2 text-left text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                            <span>Full Crew</span>
                        </DisclosureButton>
                        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <ul>
                                <li v-for="[positionTitle, value] in film.crew" :key="index">
                                    <div class="flex justify-between">
                                        <p>{{ positionTitle }}</p>
                                        <p>{{ value }}</p>
                                    </div>
                                </li>
                            </ul>
                        </DisclosurePanel>
                    </Disclosure>
                </div>

                <!-- Cast -->
                <div v-auto-animate class="space-y-1">
                    <Disclosure>
                        <DisclosureButton class="flex w-full justify-between rounded-lg bg-primary-light px-4 py-2 text-left text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                            <span>Cast</span>
                        </DisclosureButton>
                        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <ul>
                                <li v-for="[positionTitle, value] in film.crew" :key="index">
                                    <div class="flex justify-between">
                                        <p>{{ positionTitle }}</p>
                                        <p>{{ value }}</p>
                                    </div>
                                </li>
                            </ul>
                        </DisclosurePanel>
                    </Disclosure>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script setup>

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const categories = ref({
  Benefits: [
    {
      id: 1,
      title: 'Funding from The Cinemat.',
    },
    {
      id: 2,
      title: "Access to Cinemat-owned equipment",
    },
    {
      id: 3,
      title: "Promotion on The Cinemat Newsletter."
    }
  ],
  "How to Partner with The Cinemat": [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
    }
  ],
  "First-Year Sets": [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
    },
  ],
})

const films = [
    {
        title: "A Fly in Buttermilk",
        director: "Renee Theodore",
        producer: "Annaelise Kennedy",
        contact: "a.kennedy@yal.edu",
        descripton: "blah blah",
        tagline: "A fly in buttermilk explores race in collegiate Greek life through the experiences of a newly-elected frat black president.",
        crew: new Map([
            ["Director of Photography", 'Jonas Kilga'],
            ["Director of Photography", 'Emely Rodriguez'],
            ["Assistant Camera 1", 'Luis Gonzalez'],
            ["Assistant Camera 2", 'Eli'],
            ["Assistant Director 1", 'Ciara'],
            ["Assistant Director 2", 'Daphne Joyce Wu'],
            ["Gaffer", 'Fernando Cuello Garcia'],
            ["Assistant Gaffer", 'Jessica Wang'],
            ["Gaffer", 'Fernando Cuello Garcia'],
            ["Gaffer", 'Fernando Cuello Garcia'],
            ["Gaffer", 'Fernando Cuello Garcia'],
             
        ]),
        cast: new Map([
             
        ]),
        embededLink: NaN,
        shootStart: "Novemeber 7th",
        shootEnd: "Novemeber 11th",
        imageUrl: "../images/sucession.jpg"
    },
    {
      title: "Hangnails",
        director: "Annaelise Kennedy",
        producer: "Annaelise Kennedy",
        contact: "a.kennedy@yal.edu",
        descripton: "blah blah",
        tagline: "A fly in buttermilk explores race in collegiate Greek life through the experiences of a newly-elected frat black president.",
        crew: new Map([
            ["Director of Photography", 'Jonas Kilga'],
            ["Director of Photography", 'Emely Rodriguez'],
            ["Assistant Camera 1", 'Luis Gonzalez'],
            ["Assistant Camera 2", 'Eli'],
            ["Assistant Director 1", 'Ciara'],
            ["Assistant Director 2", 'Daphne Joyce Wu'],
            ["Gaffer", 'Fernando Cuello Garcia'],
            ["Assistant Gaffer", 'Jessica Wang'],
            ["Gaffer", 'Fernando Cuello Garcia'],
            ["Gaffer", 'Fernando Cuello Garcia'],
            ["Gaffer", 'Fernando Cuello Garcia'],
             
        ]),
        cast: new Map([
             
        ]),
        embededLink: "https://www.youtube.com/watch?v=flf7DOhG1CU",
        shootStart: "Novemeber 7th",
        shootEnd: "Novemeber 11th",
        imageUrl: "../images/sucession.jpg"
    },
    {
        title: "A Fly in Buttermilk",
        director: "Renee Theodore",
        producer: "Annaelise Kennedy",
        contact: "a.kennedy@yal.edu",
        descripton: "blah blah",
        tagline: "A fly in buttermilk explores race in collegiate Greek life through the experiences of a newly-elected frat black president.",
        crew: new Map(),
        link: NaN,
        shootStart: "Novemeber 7th",
        shootEnd: "Novemeber 11th"
    }
]

</script>