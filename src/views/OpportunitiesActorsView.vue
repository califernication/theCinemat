<template>

  <div class="flex flex-col w-full px-20 sm:px-44 mt-14 mb-6 gap-4">
      <h1 class="text-primary text-4xl sm:text-5xl font-semibold text-center tacking-wide">Opportunities to Act</h1>
      <!-- TODO: Fix text -->
      <p class="text-md text-gray-500">On this page, you will find a list of current open roles for student film sets. These roles range from directing and producing to cinematography and editing, and offer a unique opportunity for you to gain valuable experience and build your portfolio while working on a variety of exciting projects with a team of talented and dedicated student filmmakers.</p>
      <p class="text-md text-gray-500">To apply for a role, simply email the contact listed on the position and production you are interested in and be sure to mention the specific role.</p>
  </div>

  <div class="productions">
    <div v-auto-animate class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="production in productions" class="bg-white shadow rounded-lg p-6 flex flex-col">
        <h2 class="text-2xl text-primary-light font-bold mb-2">{{ production.title }}</h2>
        <p class="text-gray-700 mb-2">dir. {{ production.director }}</p>
        <p class="text-gray-700 mb-2">Shooting Period: {{ production.shootStart }} to {{ production.shootEnd }}</p>
        <p class="text-gray-700 mb-2">Contact: <a class="text-primary-light font-medium underline decoration-2" :href="'mailto:' + production.contact"> {{ production.contact }}</a></p>
        <p class="text-sm text-gray-700 mb-6 italic">{{ production.description }}</p>
        <ul class="list-disc px-5">
          <li v-for="(item, name) in production.roles" :key="name" class="mb-2">
            <h3 class="text-md font-bold">{{ name }}</h3>
            <p class="text-gray-700">{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { onMounted, ref } from "vue";
import { db } from "../firebase/index.js"

const productions = ref([])
  
onMounted(async () => {
  const productionsSnapshot = await getDocs(collection(db, "productions"))
  let fbOpp = []
  productionsSnapshot.forEach((doc) => {
    const production = {
        id: doc.id,
        title: doc.data().title,
        director: doc.data().director,
        description: doc.data().description,
        shootStart: doc.data().shootStart,
        shootEnd: doc.data().shootEnd,
        positions: doc.data().positions,
        contact: doc.data().contact,
        roles: doc.data().roles,
    }
    if (production.roles && Object.keys(production.roles).length > 0) {
      fbOpp.push(production)
    }
  });
  productions.value = fbOpp
});

</script>
  
<style scoped>
.productions {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>