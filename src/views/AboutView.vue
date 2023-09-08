<!-- TODO: move Membership to its own page -->
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
              <p class="text-md text-gray-500">The Yale Cinematic Productions - A Student Alliance ("The Cinemat") is a 501(c)3 focused on film production education through technical training and community building.</p>
              <p class="text-md text-gray-500">We are Yale University’s only film production organization. Our mission is to provide accessible practical film education and support film productions on campus with technical know-how, equipment, and financial aid.</p>
              <p class="text-sm italic text-gray-500">Founded in 2021 by Annaelise Kennedy in association with Evelyn Larson and the ‘Founding Members’ below:</p>
              <ul>
                <li class="text-sm text-gray-500">Jonas Kilga (Vice President)</li>
                <li class="text-sm text-gray-500">Charlie Gleberman (Director of Development/Developed Workshops)</li>
                <li class="text-sm text-gray-500">Annelise Ratner (Developed Workshops)</li>
                <li class="text-sm text-gray-500">Kari Hustad (Head of Education)</li>
                <li class="text-sm text-gray-500">Maggie Schyner (Director of Marketing & Communications)</li>
              </ul>
              
            </div>
            
            <div class="flex-1 space-y-5 sm:space-y-4">
              <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Offerings</h2>
              <ul class="list-disc px-6">
                <li class="text-md text-gray-500">Biannaul 24-hour Film Festival</li>
                <li class="text-md text-gray-500">Workshops on a variety of technical and artistic film skills</li>
                <li class="text-md text-gray-500">Hands-on production opportunities to apply skills learned in workshops</li>
                <li class="text-md text-gray-500">Community building events, including trivia nights, meet and greets, screenings, and more</li>
                <li class="text-md text-gray-500">Promotional, financial, technical, and material support for film productions on campus</li>
                <li class="text-md text-gray-500">A Fro-Film curriculum, specifically mentoring first-years through pre-production, production, and post</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- TODO: add photo reel -->

        <!-- TODO: Membership -->

        <div class="grid grid-flow-col gap-72 mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-18">
          <div>
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Membership</h2>
            <!-- <p class="text-xl text-gray-500">The 2022-2023 board is incredibly excited to support The Cinemat through the academic year. Please reach out if you have any questions!</p> -->
          </div>
          <div>
            <p>To become a member, one must complete 2 out of 4 requirements and apply through the google form for membership.</p>
            <ul class="list-disc px-6">
              <li class="text-md text-gray-500">Work on a Cinemat approved production.</li>
              <li class="text-md text-gray-500">Attend 2 Cinemat Workshops.</li>
              <li class="text-md text-gray-500">Participate in the 24hr film festival.</li>
              <li class="text-md text-gray-500">Come to 3 board meetings.</li>
            </ul>
            <p>Becoming a member allows you to apply for The Cinemat's food award grant, use The Cinemat's non-profit status for in-kind donations of your films, and run for board positions. You also get to sign your name on our Cine-Apple Box, a Cinemat tradition at initiation!</p>
          </div>
        </div>

        <!-- Affiliations -->
        <div class="pb-12 px-6 lg:px-8 lg:pb-18 max-w-7xl self-center">
          <p class="text-lg text-primary text-center">Our continous support to the Yale community is in great thanks to our affiliation with
          <a class="text-primary-light font-medium underline decoration-2" href="https://ccam.yale.edu/" target="_blank" rel="noopener noreferrer">
            Yale’s Center for Collaborative Arts and Media (CCAM)
          </a>
           and 
          <a class="text-primary-light font-medium underline decoration-2" href="https://fms.yale.edu/" target="_blank" rel="noopener noreferrer">
            Yale’s Film and Media Studies Program
          </a>.</p>
        </div>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
        <!-- People  -->
        <div class="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-18">
          <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div class="space-y-5 sm:space-y-4">
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Meet our leadership</h2>
              <p class="text-xl text-gray-500">The 2022-2023 board is incredibly excited to support The Cinemat through the academic year. Please reach out if you have any questions!</p>
            </div>
            <div class="lg:col-span-2">
              <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                <li v-for="person in leadership" :key="person.name">
                  <div class="flex items-center space-x-4 lg:space-x-6">
                    <img class="h-16 w-16 rounded-full lg:h-20 lg:w-20" :src="person.imageUrl" alt="" />
                    <div class="space-y-1 text-lg font-medium leading-6">
                      <h3>{{ person.name }}</h3>
                      <p class="text-indigo-600">{{ person.role }}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

    <div class="mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-18">
      <div class="space-y-8 sm:space-y-12">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Members</h2>
          <p class="text-xl text-gray-500">The 2022-2023 memeber cohort. Take a look at this page for some information on how to become a member.</p>
        </div>
        <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
          <li v-for="person in members" :key="person.name">
            <div class="space-y-4">
              <div class="space-y-2">
                <div class="text-xs font-medium lg:text-sm">
                  <h3>{{ person.name }}</h3>
                  <p class="text-indigo-600">{{ person.classYear }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>


      
    </div>
  </div>
</template>

<script>
// const leadership = [
//   {
//     name: 'Soojin Park',
//     role: 'President',
//     imageUrl:
//       'https://bloximages.newyork1.vip.townnews.com/oanow.com/content/tncms/assets/v3/editorial/f/6f/f6fe7948-be65-11eb-ab73-c7b9f3e9848b/60aeb7df00925.image.jpg?crop=1567%2C1175%2C98%2C0&resize=1567%2C1175&order=crop%2Cresize',
//     bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
//     twitterUrl: '#',
//     linkedinUrl: '#',
//   },
//   {
//     name: 'Daphne Joyce Wu',
//     role: 'Vice President',
//     imageUrl:
//       'https://bloximages.chicago2.vip.townnews.com/captimes.com/content/tncms/assets/v3/editorial/5/5d/55db1acd-7bcb-5953-9d98-195bc5d55ea8/62e6b6f4b1cd2.image.jpg?resize=1763%2C1175',
//     bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
//     twitterUrl: '#',
//     linkedinUrl: '#',
//   },
//   {
//     name: 'Olivia Cevasco',
//     role: 'Secretary',
//     imageUrl:
//       'https://media.licdn.com/dms/image/C4E03AQHlXdncW9Isbw/profile-displayphoto-shrink_800_800/0/1639489288052?e=1677715200&v=beta&t=iKlFvMa3hcq7LLuhYpxHGPclT49bGMEQovF7dZ1DdY8',
//     bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
//     twitterUrl: '#',
//     linkedinUrl: '#',
//   },
//   {
//     name: 'Nydia del Carmen',
//     role: 'Treasurer',
//     imageUrl:
//       'https://media.licdn.com/dms/image/C5603AQEMcmXiEfNHfg/profile-displayphoto-shrink_800_800/0/1656473372257?e=1677715200&v=beta&t=U5bQWlyeMb_RTAzpke_UmaLfgyV0x4cCyITJ1EJxLes',
//     bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
//     twitterUrl: '#',
//     linkedinUrl: '#',
//   },
// ]

import { collection } from "firebase/firestore";
import { db } from "../firebase/index.js";
import { getDocs } from "firebase/firestore";


export default {
    data() {
        return {
            leadership: [],
            members: []
        };
    },
    mounted() {
        this.fetchMembersFromFirestore();
    },
    methods: {
        async fetchMembersFromFirestore() {
          try {
            const membersCollection = await getDocs(collection(db, "members"))
            membersCollection.forEach((doc) => {
              const member = {
                name: doc.data().name,
                email: doc.data().email,
                classYear: doc.data().classYear,
                role: doc.data().role,
                imageUrl: doc.data().imageUrl,
              }
              if (doc.data().role === "President" || doc.data().role === "Vice President" || doc.data().role === "Secretary" || doc.data().role === "Treasurer") {
                this.leadership.push(member)
              } else {
                this.members.push(member)
              }
            })
          }
          catch (error) {
            console.log(error)
          } 
        }
    }
}

</script>
