<!-- By semester -->


<!-- v-for Film component by Semester -->



<script setup>
 
import { collection, query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { onMounted, ref, reactive } from "vue";
import { db } from "../firebase/index.js"

const screenings = ref([])
const reactiveMap = ref(new Map())

onMounted(async () => {
  const screeningsSnapshot = await getDocs(collection(db, "productions"))
  console.log(screeningsSnapshot)
  let fbScreenings = []
  let screeningsMap = new Map()
  screeningsSnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`)
    const screening = {
        id: doc.id,
        title: doc.data().title,
        screenDate: doc.data().screenData,
        // screenPlace: doc.data().screenPlace, 
        positions: doc.data().positions,
        contact: doc.data().contact,
        poster: doc.data().poster,
        director: doc.data().director
    }
    fbScreenings.push(screening)
    // get month and year from screenDate, a timeStamp object, to determine the semester
    screenDateDt = screening.screenDate.Date()
    season = "Spring" ? screenDateDt.month() < 8 : "Fall"
    semester = semester + " " + screenDateDt.year()
    if (!screeningsMap.has(semester)) {
        screeningsMap.set(semester, [screening])
    } else {
        screeningsMap.get(semester).push(screening)
    }
  });
  screenings.value = fbScreenings
  reactiveMap.value = screeningsMap
  console.log(reactiveMap.value)
});

</script>