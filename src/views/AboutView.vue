<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="about">
    <div class="bg-white">

      <div class="flex flex-col">
        
        <!-- About Us, Offerings -->
        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-16">
          <!-- old: lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 -->
          <div class="gap-10 flex flex-col md:flex-row md:gap-30">
            <div class="flex-1 space-y-5 sm:space-y-4">
              <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">About Us</h2>
              <p class="text-xl text-gray-500">The Cinemat is a 501(c)3 focused on film production education through technical training and community building.</p>
              <p class="text-xl text-gray-500">We are Yale University’s only film production organization. Our mission is to provide accessible practical film education and support film productions on campus with technical know-how, equipment, and financial aid. </p>
            </div>
            <div class="flex-1 space-y-5 sm:space-y-4">
              <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Offerings</h2>
              <ul class="list-disc px-6">
                <li class="text-xl text-gray-500">Biannaul 24-hour Film Festival</li>
                <li class="text-xl text-gray-500">Workshops on a variety of technical and artistic film skills</li>
                <li class="text-xl text-gray-500">Hands-on production opportunities to apply skills learned in workshops</li>
                <li class="text-xl text-gray-500">Community building events, including trivia nights, meet and greets, screenings, and more</li>
                <li class="text-xl text-gray-500">Promotional, financial, technical, and material support for film productions on campus</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Affiliations -->
        <div class="mx-auto px-8 max-w-7xl self-center">
          <p class="text-2xl text-primary text-center">Our continous support to the Yale community is in great thanks to our affiliation with
          <a class="text-primary-light font-medium underline decoration-2" href="https://ccam.yale.edu/" target="_blank" rel="noopener noreferrer">
            Yale’s Center for Collaborative Arts and Media (CCAM)
          </a>
           and 
          <a class="text-primary-light font-medium underline decoration-2" href="https://fms.yale.edu/" target="_blank" rel="noopener noreferrer">
            Yale’s Film and Media Studies Program
          </a>.</p>
        </div>

        <!-- People  -->
        <!-- TODO: stack the rows of people -->
        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 space-y-8">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
          <div class="lg:col-span-2">
            <ul role="list" class="flex flex-wrap justify-between space-y-12 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              <li v-for="person in people" :key="person.name" class="sm:py-8 flex-1">
                <div class="space-y-4 sm:grid sm:grid-cols-8 sm:items-start sm:gap-6 sm:space-y-0 min-w-full">
                  <div class="col-span-4 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img class="object-cover shadow-lg rounded-lg" :src=person.imageUrl alt="" />
                  </div>
                  <div class="sm:col-span-4">
                    <div class="space-y-4">
                      <div class="text-lg leading-6 font-medium space-y-1">
                        <h3>{{ person.name }}</h3>
                        <p class="text-indigo-600">{{ person.role }}</p>
                      </div>
                      <!-- <div class="text-lg">
                        <p class="text-gray-500">{{ person.bio }}</p>
                      </div> -->
                      <ul role="list" class="flex space-x-5">
                        <li>
                          <a :href="person.twitterUrl" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Twitter</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">LinkedIn</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


      
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: 'Soojin Park',
    role: 'President',
    imageUrl:
      'https://bloximages.newyork1.vip.townnews.com/oanow.com/content/tncms/assets/v3/editorial/f/6f/f6fe7948-be65-11eb-ab73-c7b9f3e9848b/60aeb7df00925.image.jpg?crop=1567%2C1175%2C98%2C0&resize=1567%2C1175&order=crop%2Cresize',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Daphne Joyce Wu',
    role: 'Vice President',
    imageUrl:
      'https://bloximages.chicago2.vip.townnews.com/captimes.com/content/tncms/assets/v3/editorial/5/5d/55db1acd-7bcb-5953-9d98-195bc5d55ea8/62e6b6f4b1cd2.image.jpg?resize=1763%2C1175',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Olivia Cevasco',
    role: 'Secretary',
    imageUrl:
      'https://media.licdn.com/dms/image/C4E03AQHlXdncW9Isbw/profile-displayphoto-shrink_800_800/0/1639489288052?e=1677715200&v=beta&t=iKlFvMa3hcq7LLuhYpxHGPclT49bGMEQovF7dZ1DdY8',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Nydia del Carmen',
    role: 'Treasurer',
    imageUrl:
      'https://media.licdn.com/dms/image/C5603AQEMcmXiEfNHfg/profile-displayphoto-shrink_800_800/0/1656473372257?e=1677715200&v=beta&t=U5bQWlyeMb_RTAzpke_UmaLfgyV0x4cCyITJ1EJxLes',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]
</script>
