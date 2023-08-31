

<!-- Create a slate of all past projects -->

<template>
    <div class="flex flex-col w-full px-20 sm:px-28 md:px-44 lg:px-72 mt-14 mb-6 gap-4">
        <h1 class="text-primary text-5xl font-semibold text-center tacking-wide">Cinemat-Sponsored Projects</h1>
        <p class="text-md text-gray-500">A Cinemat supported production gets benefits such as funds from The Cinemat, access to Cinemat-owned equipment, and priority promotion in The Cinemat Newsletter.</p>
        <div>
          <ul class="text-md text-gray-500">To become a Cinemat-sponsored production: </ul>
            <li class="text-md text-gray-500">The Director or the Producer of the film must be an official member of The Cinemat.</li>
            <li class="text-md text-gray-500">At least two heads of departments must have worked on Cinemat Productions previously.</li>
            <li class="text-md text-gray-500">Have at least three less experienced filmmakers mentored in specific departments.</li>
            <li class="text-md text-gray-500">Prioritize cultivating a set environment centering teaching and learning.</li>
            <li class="text-md text-gray-500">Submit an application to the Executive Board. Email <a class="text-bold underline text-primary-light" href="mailto:olivia.cevasco@yale.edu">olivia.cevasco@yale.edu</a> for more information. </li>
        </div>

        <p class="text-md text-gray-500">The Cinemat does support <a class="font-semibold">first-year films</a> crewed entirely by new filmmakers with experienced mentors advising the process through pre-production and on-set. If you wish to become a Cinemat Production as a first-year film, email <a class="text-bold underline text-primary-light" href="mailto:olivia.cevasco@yale.edu">olivia.cevasco@yale.edu</a> for more information.</p>
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
            <li v-for="film in films" :key="film.id">
              <div class="card space-y-4 p-8 shadow-xl">
                <h2 class="font-bold text-5xl text-center mt-4 tracking-tighter">
                    {{ film.title }}
                </h2>
                <div class="divider mb-4  mx-20"></div>
                <div class="aspect-w-3 aspect-h-2">
                  <iframe v-if="film.embededLink"
                    :src="film.embededLink"
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>>
                  </iframe>
                  <img v-else class="rounded-lg object-cover shadow-lg" :src="film.poster" alt="" />
                </div>
                <div class="text-primary space-y-1 leading-6">
                  <h3 class="font-medium text-lg">{{ film.director }}</h3>
                  <p class="text-primary-light text-md">Principal Photography: {{ formatDate(film.shootStart) }} to {{ formatDate(film.shootEnd) }}</p>
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
                              <li v-for="(person, positionTitle, index) in film.crew" :key="index">
                                    <div class="flex justify-between">
                                        <p>{{ positionTitle }}</p>
                                        <p>{{ person }}</p>
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
                              <li v-for="(person, character, index) in film.cast" :key="index">
                                    <div class="flex justify-between">
                                        <p>{{ character }}</p>
                                        <p>{{ person }}</p>
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
import { ref, onMounted } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { getAllProjects } from '../firebase/index.js';

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

const films = ref([]);

onMounted(async () => {
    try {
        films.value = await getAllProjects();
        console.log(films.value);
        console.log(formatDate(films.value[0].shootStart));
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
});

function formatDate(firebaseTimestamp) {
    const date = firebaseTimestamp.toDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();

    let suffix = 'th';
    if (day === 1 || day === 21 || day === 31) {
        suffix = 'st';
    } else if (day === 2 || day === 22) {
        suffix = 'nd';
    } else if (day === 3 || day === 23) {
        suffix = 'rd';
    }

    const year = date.getFullYear();

    return `${month} ${day}${suffix}, ${year}`;
}

// const films = [
//     {
//         title: "A Fly in Buttermilk",
//         director: "Renee Theodore",
//         producer: "Annaelise Kennedy",
//         contact: "a.kennedy@yal.edu",
//         descripton: "blah blah",
//         tagline: "A fly in buttermilk explores race in collegiate Greek life through the experiences of a newly-elected frat black president.",
//         crew: new Map([
//             ["Director of Photography", 'Jonas Kilga'],
//             ["Director of Photography", 'Emily Rodriguez'],
//             ["Assistant Camera 1", 'Luis Gonzalez'],
//             ["Assistant Camera 2", 'Eli'],
//             ["Assistant Director 1", 'Ciara'],
//             ["Assistant Director 2", 'Daphne Joyce Wu'],
//             ["Gaffer", 'Fernando Cuello Garcia'],
//             ["Assistant Gaffer", 'Jessica Wang'],
//             ["Gaffer", 'Fernando Cuello Garcia'],
//             ["Gaffer", 'Fernando Cuello Garcia'],
//             ["Gaffer", 'Fernando Cuello Garcia'],
             
//         ]),
//         cast: new Map([
             
//         ]),
//         embededLink: NaN,
//         shootStart: "Novemeber 7th",
//         shootEnd: "Novemeber 11th",
//         imageUrl: "../images/sucession.jpg"
//     },
//     {
//       title: "Hangnails",
//         director: "Annaelise Kennedy",
//         producer: "Annaelise Kennedy",
//         contact: "a.kennedy@yal.edu",
//         descripton: "blah blah",
//         tagline: "A fly in buttermilk explores race in collegiate Greek life through the experiences of a newly-elected frat black president.",
//         crew: new Map([
//             ["Director of Photography", 'Jonas Kilga'],
//             ["Director of Photography", 'Emely Rodriguez'],
//             ["Assistant Camera 1", 'Luis Gonzalez'],
//             ["Assistant Camera 2", 'Eli'],
//             ["Assistant Director 1", 'Ciara'],
//             ["Assistant Director 2", 'Daphne Joyce Wu'],
//             ["Gaffer", 'Fernando Cuello Garcia'],
//             ["Assistant Gaffer", 'Jessica Wang'],
//             ["Gaffer", 'Fernando Cuello Garcia'],
//             ["Gaffer", 'Fernando Cuello Garcia'],
//             ["Gaffer", 'Fernando Cuello Garcia'],
             
//         ]),
//         cast: new Map([
             
//         ]),
//         embededLink: "https://www.youtube.com/watch?v=flf7DOhG1CU",
//         shootStart: "Novemeber 7th",
//         shootEnd: "Novemeber 11th",
//         imageUrl: "../images/sucession.jpg"
//     },
//     {
//         title: "A Fly in Buttermilk",
//         director: "Renee Theodore",
//         producer: "Annaelise Kennedy",
//         contact: "a.kennedy@yal.edu",
//         descripton: "blah blah",
//         tagline: "A fly in buttermilk explores race in collegiate Greek life through the experiences of a newly-elected frat black president.",
//         crew: new Map(),
//         link: NaN,
//         shootStart: "Novemeber 7th",
//         shootEnd: "Novemeber 11th"
//     }
// ]

</script>