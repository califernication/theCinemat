

<!-- Create a slate of all past projects -->

<template>
    <div class="flex flex-col w-full px-20 sm:px-28 md:px-44 lg:px-72 mt-14 gap-4">
        <h1 class="text-primary text-5xl font-semibold underline tacking-wide">Cinemat-Sponsored Projects</h1>
        <p class="text-md text-gray-500">The Cinemat position packets provide information about the responsibilities and guidelines for various Cinemat production roles. If you click the chevron symbol next to a packet, you can learn more about the role. You can also click on the packet to open it in a new tab. If you have any issues accessing the packets or if you want information about a role that is not listed, please contact thecinemat@yale.edu.</p>
    </div>
    <div class="mx-auto max-w-7xl py-12 px-6 lg:px-20 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="lg:col-span-3">
          <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
            <li v-for="film in films" :key="film.title">
              <div class="card space-y-4 p-8 shadow-xl">
                <h2 class="italic font-bold text-5xl text-center">
                    {{ film.title }}
                </h2>
                <div class="space-y-1 text-lg font-medium leading-6">
                  <h3>{{ film.director }}</h3>
                  <p class="text-indigo-600">{{ film.shootStart }} to {{ film.shootEnd }}</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">{{ film.tagline }}</p>
                </div>

                <div class="space-y-1">
                    <Disclosure>
                        <DisclosureButton class="flex w-full justify-between rounded-lg bg-primary-light px-4 py-2 text-left text-sm font-medium text-white hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                            <span>Full Crew</span>
                        </DisclosureButton>
                        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <!-- {{ position.description }} -->
                        </DisclosurePanel>
                    </Disclosure>
                </div>


                <!-- <ul role="list" class="flex space-x-5">
                  <li>
                    <a :href="person.twitterUrl" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Twitter</span>
                      <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">LinkedIn</span>
                      <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>
                </ul> -->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script setup>

const films = [
    {
        title: "A Fly in Buttermilk",
        director: "Renee Theodore",
        producer: "Annaelise Kennedy",
        contact: "a.kennedy@yal.edu",
        descripton: "blah blah",
        tagline: "A fly in buttermilk explores race in collegiate Greek life through the experiences of a newly-elected frat black president.",
        crew: new Map([
            [1, 'one'],
            [2, 'two'],
            [3, 'three'],
        ]),
        link: NaN,
        shootStart: "Novemeber 7th",
        shootEnd: "Novemeber 11th"
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