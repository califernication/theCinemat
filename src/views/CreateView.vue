<!-- create view that allows user to define the details of their production -->
<!-- Create a Vue view that asks a for title: String, tagline: String, contact: String, description: String, director: String, producer: String, contact: String, genre: String, poster: Reference, mediaUrls: [Reference], shootStart: timestamp, shootEnd: timestamp, positions: [String] if vacancies: bool, screenDate: timestamp if screening: bool and creates a Firestore document. -->

<!-- TODO: UI looks like shit -->
<template>
    <div class="flex flex-col items-center min-h-screen py-2 pt-14">
        <h1 class="text-3xl font-bold text-primary-light">Create a Production</h1>
        <form class="flex flex-col flex-wrap max-h-screen px-4 py-4" @submit.prevent="createFilm">
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="title">Title</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="title" v-model="title" placeholder="Title"/>
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="tagline">Tagline</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="tagline" v-model="tagline" placeholder="Tagline" />
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="contact">Contact</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="contact" v-model="contact" placeholder="Contact"/>
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="description">Description</label>
                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" id="description" v-model="description" placeholder="Description"></textarea>
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="director">Director</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="director" v-model="director" placeholder="Director" />
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="producer">Producer</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="producer" v-model="producer" placeholder="Producer" />
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="genre">Genre</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="genre" v-model="genre" placeholder="Genre" />
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="poster">Poster</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="file" id="poster" ref="posterInput"/>
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="media">Additional Media (select up to 5)</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="file" id="media" ref="mediaInput" multiple/>
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="shootStart">Shoot Start</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="date" id="shootStart" v-model="shootStart" placeholder="Shoot Start" />
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="shootEnd">Shoot End</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="date" id="shootEnd" v-model="shootEnd" placeholder="Shoot End" />
            </div>
            <!-- check if there are vacancies with a checkbox. if there are, ask for the position titles, which are predefined in a dropdown -->
            <div class="flex flex-col items-center justify-center px-4 py-4">
                <label class="text-primary-light" for="vacancies">Is your team looking for additional crew memebers?</label>
                <input class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="checkbox" id="vacancies" v-model="vacancies" placeholder="Vacancies" />
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light">Positions Available</label>
                <div class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50">
                    <div class="flex items-center py-2 gap-2">
                        <input type="checkbox" ref="checkbox" name="position" value="Director of Photography" id="Director of Photography" />
                        <label>Director of Photography</label>
                    </div>
                    <div class="flex items-center py-2 gap-2">
                        <input type="checkbox" ref="checkbox" name="position" value="Assistant Camera 1" id="Assistant Camera 1" />
                        <label>Assistant Camera 1</label>
                    </div>
                    <div class="flex items-center py-2 gap-2">
                        <input type="checkbox" ref="checkbox" name="position" value="Assistant Camera 2" id="Assistant Camera 2" />
                        <label for="Assistant Camera 2">Assistant Camera 2</label>
                    </div>
                    <div class="flex items-center py-2 gap-2">
                        <input type="checkbox" ref="checkbox" name="position" value="Gaffer" id="Gaffer" />
                        <label for="Gaffer">Gaffer</label>
                    </div>
                    <div class="flex items-center py-2 gap-2">
                        <input type="checkbox" ref="checkbox" name="position" value="Sound Designer" id="Sound Designer" />
                        <label for="Sound Designer">Sound Designer</label>
                    </div>
                    <div class="flex items-center py-2 gap-2">
                        <input type="checkbox" ref="checkbox" name="position" value="Sound Editor" id="Sound Editor" />
                        <label for="Sound Editor">Sound Editor</label>
                    </div>
                    <div class="flex items-center py-2 gap-2">
                        <input type="checkbox" ref="checkbox" name="position" value="Editor (General)" id="Editor (General)" />
                        <label for="Editor (General)">Editor (General)</label>
                    </div>
                    <div class="flex items-center py-2 gap-2">
                        <input type="checkbox" ref="checkbox" name="position" value="Colorist" id="Colorist" />
                        <label for="Colorist">Colorist</label>
                    </div>
                    <div class="flex items-center py-2 gap-2">
                        <input type="checkbox" ref="checkbox" name="position" value="Assistant Director" id="Assistant Director" />
                        <label for="Assistant Director">Assistant Director</label>
                    </div>
                    <div class="flex items-center py-2 gap-2">
                        <input type="checkbox" ref="checkbox" name="position" value="Assistant Producer" id="Assistant Producer" />
                        <label for="Assistant Producer">Assistant Producer</label>
                    </div>
                </div>
            </div>
            <!-- check if the film is screening with a checkbox. if it is, ask for the a date -->
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="screening">Is the film screening?</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="checkbox" id="screening" v-model="screening" placeholder="Screening" />
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="screeningDate">Screening Date</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="date" id="screeningDate" v-model="screenDate" placeholder="Screening Date" />
            </div>

            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <button class="w-full px-4 py-2 text-white bg-primary-light rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-light focus:ring-opacity-50">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import { db, storage } from "../firebase/index.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import store from "../store"

// create the 
export default {
  data() {
    return {
      title: '',
      tagline: '',
      contact: '',
      description: '',
      director: '',
      producer: '',
      genre: '',
      posterUrl: '',
      mediaUrls: [],
      shootStart: '',
      shootEnd: '',
      positions: [],
      vacancies: false,
      screening: false,
      screenDate: '',
      user: store.getters.userEmail
    };
  },
  methods: {
    async createFilm() {
        // TODO: maybe safeguard that only imgs can be uploaded
      // upload poster
      const file = this.$refs.posterInput.files[0];
      const storageRef = ref(storage, `${this.title}/poster`)
      await uploadBytes(storageRef, file).then(async (snapshot) => {
        const url = await getDownloadURL(storageRef);
        this.posterUrl = url;
      });

      // upload media
      const files = this.$refs.mediaInput.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const storageRef = ref(storage, `${this.title}/media/${file.name}`)
        await uploadBytes(storageRef, file).then(async (snapshot) => {
            const url = await getDownloadURL(storageRef);
            this.mediaUrls.push(url);
        });
      }

      // Get positions
        // Get an array of all the checkbox elements
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        // Loop over them and push the value to the positions array
        checkboxes.forEach((checkbox) => {
            this.positions.push(checkbox.value);
        });

      const film = {
        title: this.title,
        tagline: this.tagline,
        contact: this.contact,
        description: this.description,
        director: this.director,
        producer: this.producer,
        positions: this.positions,
        genre: this.genre,
        posterUrl: this.posterUrl,
        mediaUrls: this.mediaUrls,
        shootStart: this.shootStart === "" ? "TBD" : new Date(Date.parse(this.shootStart)),
        shootEnd: this.shootEnd === "" ? "TBD" : new Date(Date.parse(this.shootEnd)),
        vacancies: this.vacancies,
        screening: this.screening,
        screenDate: this.screenDate === "" ? "TBD" : new Date(Date.parse(this.screenDate)),
        user: store.getters.userEmail,
      };

      console.log("sending film to firebase!")
      await addDoc(collection(db, "productions"), film);
    }
  },
};

</script>