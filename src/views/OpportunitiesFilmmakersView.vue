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
        <div class="flex flex-col w-full px-20 sm:px-44 mt-14 gap-4">
            <h1 class="text-primary text-4xl sm:text-5xl font-semibold text-center tacking-wide">Opportunities to Join a Set</h1>
            <!-- TODO: link to create Create your film here -->
            <p class="text-md text-gray-500">On this page, you will find a list of current open roles for student film sets. These roles range from directing and producing to cinematography and editing, and offer a unique opportunity for you to gain valuable experience and build your portfolio while working on a variety of exciting projects with a team of talented and dedicated student filmmakers.</p>
            <p class="text-md text-gray-500">To apply for a role, simply email the contact listen on the position and production you are interested in.</p>
            <p class="text-md text-gray-500">We encourage all students, regardless of their major or experience level, to apply. We value diversity and are committed to creating a welcoming and inclusive environment for all. We look forward to receiving your application and potentially working with you on a film set in the near future!</p>
            <p class="text-md text-gray-500">If you are unsure about what exactly you might want to do, fill out <a class="link text-primary font-semibold" href="">this Google Form</a> to make yourself available as a PA to any Cinemat set.</p>
        </div>
        <div v-auto-animate class="flex flex-col flex-wrap max-h-[800px] gap-10 mt-16 justify-center align-middle m-auto max-w-3xl">
            <div class="flex flex-none flex-col" v-for="[positionTitle, value] in reactiveMap" :key="index">
                <h2 class=" text-primary-light text-3xl font-extrabold tracking-tighter sm:text-4xl mb-3">{{ positionTitle }}</h2>
                <div class="flex-none mb-4" v-for="opportunity in value" :key="opportunity.id">
                    <p class="font-medium italic text-lg"> "{{ opportunity.title }}"</p>
                    <p class="text-gray-500">Shooting Period: {{ typeof(opportunity.shootStart) === "string" ? opportunity.shootStart : opportunity.shootStart.toDate().toDateString() }} to {{ typeof(opportunity.shootEnd) === "string" ? opportunity.shootEnd : opportunity.shootEnd.toDate().toDateString() }}</p>
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
  const opportunitiesSnapshot = await getDocs(collection(db, "productions"))
  console.log(opportunitiesSnapshot)
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