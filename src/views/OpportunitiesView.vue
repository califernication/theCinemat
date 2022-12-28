<!-- 
For filmmakers
    PA Sheet
    Specific roles to be filled

For actors
    Auditions Sections 
    !-->

<template>
    <!-- TODO: create PA sheet signup -->
    <!-- TODO: membership details -->
    <!-- TODO: center lol -->
        <h1 class="text-primary text-5xl font-semibold underline text-center mt-14 tacking-wide">Opportunities for Filmmakers</h1>
        <div class="flex flex-col flex-wrap max-h-[800px] gap-10 mt-16 justify-center align-middle m-auto max-w-3xl">
            <div class="flex flex-none flex-col" v-for="[positionTitle, value] in reactiveMap" :key="index">
                <h2 class=" text-primary-light text-3xl font-extrabold tracking-tighter sm:text-4xl mb-3">{{ positionTitle }}</h2>
                <div class="flex-none mb-4" v-for="opportunity in value" :key="opportunity.id">
                    <p class="font-medium italic text-lg"> "{{ opportunity.title }}"</p>
                    <p class="text-gray-500">Shooting Period: {{ opportunity.shootStart.toDate().toDateString() }} to {{ opportunity.shootEnd.toDate().toDateString() }}</p>
                    <p>Contact: <a class="text-primary-light font-medium underline decoration-2" :href="'mailto:' + opportunity.contact"> {{ opportunity.contact }}</a></p>
                </div>
            </div>
        </div>

        <!-- old with rows instead of columms, but centered -->
        <!-- <div>
        <h1 class="text-primary text-5xl font-semibold underline text-center mt-14 tacking-wide">Opportunities for Filmmakers</h1>
        <div class="flex flex-wrap justify-center pt-14 max-w-7xl mx-auto">
            <div class="flex-container m-10" v-for="[positionTitle, value] in reactiveMap" :key="index">
                <h2 class=" text-primary-light text-3xl font-extrabold tracking-tighter sm:text-4xl mb-4">{{ positionTitle }}</h2>
                <div class="flex-1 pb-4" v-for="opportunity in value" :key="opportunity.id">
                    <p class="font-medium italic">{{ opportunity.title }}</p>
                    <p>Shooting Period: {{ opportunity.shootStart.toDate().toDateString() }} to {{ opportunity.shootEnd.toDate().toDateString() }}</p>
                    <p>Contact: <a class="text-primary-light font-medium underline decoration-2" :href="'mailto:' + opportunity.contact"> {{ opportunity.contact }}</a></p>
                </div>
            </div>
        </div>

        
    </div> -->
</template>

<style>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>


<script setup>
 
import { collection, query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { onMounted, ref, reactive } from "vue";
import { db } from "../firebase/index.js"

const opportunities = ref([])
const reactiveMap = ref(new Map())

onMounted(async () => {
  const opportunitiesSnapshot = await getDocs(collection(db, "opportunities"))
  let fbOpp = []
  let positionsMap = new Map()
  opportunitiesSnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`)
    const opportunity = {
        id: doc.id,
        title: doc.data().title,
        shootStart: doc.data().shootStart,
        shootEnd: doc.data().shootEnd,
        positions: doc.data().positions,
        contact: doc.data().contact,
    }
    fbOpp.push(opportunity)
    for (const position of opportunity.positions) {
        if (!positionsMap.has(position)) {
            positionsMap.set(position, [opportunity])
        } else {
            positionsMap.get(position).push(opportunity)
        }
    }
  });
  opportunities.value = fbOpp
  reactiveMap.value = positionsMap
  console.log(reactiveMap.value)
});

</script>