

<!-- Create a slate of all past projects -->

<template>
    <div class="flex flex-col w-full px-20 sm:px-28 md:px-44 lg:px-72 mt-14 gap-4">
        <h1 class="text-primary text-5xl font-semibold underline tacking-wide">Cinemat-Sponsored Projects</h1>
        <p class="text-md text-gray-500">The Cinemat position packets provide information about the responsibilities and guidelines for various Cinemat production roles. If you click the chevron symbol next to a packet, you can learn more about the role. You can also click on the packet to open it in a new tab. If you have any issues accessing the packets or if you want information about a role that is not listed, please contact thecinemat@yale.edu.</p>
    </div>
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