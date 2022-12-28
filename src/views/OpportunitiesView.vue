<!-- 
For filmmakers
    PA Sheet
    Specific roles to be filled

For actors
    Auditions Sections 
    !-->

<template>
    <div>
        <h1>Opportunities</h1>

        <div v-for="opportunity in opportunities" :key="opportunity.id">
            <h2>{{ opportunity.title }}</h2>
            <p>{{ opportunity.shootStart }} - {{ opportunity.shootEnd }}</p>
            <p>{{ opportunity.positions }}</p>
            <p>{{ opportunity.contact }}</p>
        </div>
    </div>
</template>


<script setup>
 
import { collection, query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { onMounted, ref } from "vue";
import { db } from "../firebase/index.js"

const opportunities = ref([])

onMounted(async () => {
  const opportunitiesSnapshot = await getDocs(collection(db, "opportunities"))
  let fbOpp = []
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
  });
  opportunities.value = fbOpp
});

</script>