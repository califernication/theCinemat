<!-- create view that allows user to define the details of their production -->
<!-- Create a Vue view that asks a for title: String, tagline: String, contact: String, description: String, director: String, producer: String, contact: String, genre: String, poster: Reference, mediaUrls: [Reference], shootStart: timestamp, shootEnd: timestamp, positions: [String] if vacancies: bool, screenDate: timestamp if screening: bool and creates a Firestore document. -->

<template>
    <div class="flex flex-col items-center min-h-screen py-2 pt-14">
        <h1 class="text-3xl font-bold text-primary-light">Create a Production</h1>
        <form class="flex flex-col flex-wrap max-h-screen px-4 py-4" @submit.prevent="createFilm">
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="title">Title</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="title" v-model="title" placeholder="Title" required/>
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="tagline">Tagline</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="tagline" v-model="tagline" placeholder="Tagline" />
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="contact">Contact</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="contact" v-model="contact" placeholder="Contact" />
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
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="file" id="poster" ref="posterInput" @change="uploadPoster"/>
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="media">Additional Media</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="file" id="media" ref="mediaInput" @change="uploadMedia" mutiple/>
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
                <label class="text-primary-light" for="position">Positions Available</label>
                <select class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" id="position" name="position">
                    <option value="actor">Actor</option>
                    <option value="actress">Actress</option>
                    <option value="director">Director</option>
                    <option value="producer">Producer</option>
                    <option value="cinematographer">Cinematographer</option>
                    <option value="editor">Editor</option>
                    <option value="sound">Sound</option>
                    <option value="makeup">Makeup</option>
                    <option value="costume">Costume</option>
                    <option value="set">Set</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <!-- <label for="positions">Positions:</label>
                <div v-for="(position, index) in positions" :key="index">
                    <input v-model="position" type="text" />
                    <button @click="removePosition(index)">Remove</button>
                </div>
                <div>
                    <input v-model="newPosition" type="text" />
                    <button @click="addPosition">Add</button>
                </div> -->
            <!-- check if the film is screening with a checkbox. if it is, ask for the a date -->
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="screening">Is the film screening?</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="checkbox" id="screening" v-model="screening" placeholder="Screening" />
            </div>
            <div class="flex flex-col items-center justify-center w-full px-4 py-4">
                <label class="text-primary-light" for="screeningDate">Screening Date</label>
                <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="date" id="screeningDate" v-model="screenDate" placeholder="Screening Date" />
            </div>
            <!-- add a button to submit -->

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
      positions: '',
    };
  },
  methods: {
    async createFilm() {
      const film = {
        title: this.title,
        tagline: this.tagline,
        contact: this.contact,
        description: this.description,
        director: this.director,
        producer: this.producer,
        genre: this.genre,
        posterUrl: this.posterUrl,
        mediaUrls: this.mediaUrls,
        shootStart: this.shootStart,
        shootEnd: this.shootEnd,
        positions: this.positions,
        vacancies: this.vacancies,
        screening: this.screening,
        screenDate: this.screenDate,
      };

      console.log("sending film to firebase!")
      await addDoc(collection(db, "productions"), film);
    },
    async uploadPoster() {
      console.log("uploading poster")
      const file = this.$refs.posterInput.files[0];
      const storageRef = ref(storage, `posters/${file.name}`)
      await uploadBytes(storageRef, file).then(async (snapshot) => {
        console.log('Uploaded poster!');
        const url = await getDownloadURL(storageRef);
        this.posterUrl = url;
        console.log(this.posterUrl)
      });
    },
    async uploadMedia() {
      const files = this.$refs.mediaInput.files;
      const mediaRefs = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const storageRef = ref(storage, `media/${file.name}`)
        await uploadBytes(storageRef, file).then(async (snapshot) => {
            console.log('Uploaded media!');
            const url = await getDownloadURL(storageRef);
            this.mediaUrls.push(url);
        });
      }
    },
  },
};

</script>