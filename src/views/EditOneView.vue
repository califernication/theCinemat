<template>
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Congratulations!</h3>
                <p class="py-4">Your film has been submitted to our system! If you are looking to complete your crew, vacancies for your set have been published on the "Set Opportunities" page.</p>
                <div class="modal-action">
                    <label @click="redirectToOpportunitiesForFilmmakers" class="btn">Go to your published production</label>
                </div>
            </div>
        </div>
    <div class="flex flex-col items-center min-h-screen py-2 pt-14">
        <h1 class="text-3xl font-bold text-primary-light">Edit a Production</h1>
        <p class="text-primary-light">Fill out the form below to list a screeening, open positions on your set, or both.</p>

        <form class="flex flex-col flex-wrap min-w-full px-96 py-4" @submit.prevent="updateFilm">
            <div class="flex flex-col gap-2 w-full px-4 py-4">
                <label class="text-primary-light" for="title">Title</label>
                <input required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="title" v-model="title" placeholder=""/>
            </div>
            <div class="flex flex-row gap-4 w-full px-4 py-4">
                <div class="flex flex-col gap-2 w-1/2">
                    <label class="text-primary-light" for="director">Director</label>
                    <input required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="director" v-model="director" placeholder="" />
                </div>
                <div class="flex flex-col gap-2 w-1/2">
                    <label class="text-primary-light" for="producer">Producer</label>
                    <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="producer" v-model="producer" placeholder="" />
                </div>
            </div>
            <!-- split space for tagline and genre -->
            <div class="flex flex-row gap-4 w-full px-4 py-4">
                <div class="flex flex-col gap-2 w-3/4">
                    <label class="text-primary-light" for="tagline">Tagline</label>
                    <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="tagline" v-model="tagline" placeholder="" />
                </div>
                <!-- make genre a select box -->
                <div class="flex flex-col gap-2 w-1/4">
                    <label class="text-primary-light" for="genre">Genre</label>
                    <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="genre" v-model="genre" placeholder="" />
                </div>
            </div>
            <div class="flex flex-col gap-2 w-full px-4 py-4">
                <label class="text-primary-light" for="contact">Contact</label>
                <input required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="email" id="contact" v-model="contact" placeholder="email@yale.edu"/>
            </div>
            <div class="flex flex-col gap-2 w-full px-4 py-4">
                <label class="text-primary-light" for="description">Description</label>
                <textarea required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" id="description" v-model="description" placeholder="Description"></textarea>
            </div>
            <!-- TODO: choose files should be rounded -->
            <div class="flex flex-row gap-4 w-full px-4 py-4">
                <div class="flex flex-col w-1/2">
                    <label class="block mb-2 text-primary-light" for="poster">Upload Poster</label>
                    <input class="block w-full text-primary-light border border-gray-300 rounded-lg cursor-pointer focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="file" id="poster" ref="posterInput"/>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG or JPEG.</p>
                </div>
                <div class="flex flex-col w-1/2">
                    <label class="block mb-2 text-primary-light">Additional Media (select up to 5)</label>
                    <input class="block w-full text-primary-light border border-gray-300 rounded-lg cursor-pointer focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="file" id="media" ref="mediaInput" multiple/>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Up to 5 files. PNG, JPEG, or PDF.</p>
                </div>
            </div>
            <!-- divide space for shoot start and shoot end -->
            <div class="flex flex-row gap-4 w-full px-4 py-4">
                <div class="flex flex-col gap-2 w-1/2">
                    <label class="text-primary-light" for="shootStart">Shoot Start</label>
                    <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="date" id="shootStart" v-model="shootStart" placeholder="Shoot Start" />
                </div>
                <div class="flex flex-col gap-2 w-1/2">
                    <label class="text-primary-light" for="shootEnd">Shoot End</label>
                    <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="date" id="shootEnd" v-model="shootEnd" placeholder="Shoot End" />
                </div>
            </div>
            <!-- check if there are vacancies with a checkbox. if there are, ask for the position titles, which are predefined in a dropdown -->
            <div class="px-4 py-4">
                <label class="flex flex-row items-center gap-4 justify-center label cursor-pointer text-primary-light" for="vacancies">
                    <span class="">Looking for additional crew members?</span> 
                    <input class="checkbox checkbox-sm" type="checkbox" id="vacancies" v-model="vacancies" />
                </label>
            </div>
            
            <div v-auto-animate>
                <div v-if="vacancies" class="flex flex-col w-full px-4 py-4 gap-4">
                    <label class="text-primary-light">Positions Available</label>
                    <ul class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50">
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Director of Photography" id="Director of Photography" />
                                <label for="Director of Photography">Director of Photography</label>
                            </div>
                        </li>
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Assistant Camera" id="Assistant Camera" />
                                <label for="Assistant Camera">Assistant Camera</label>
                            </div>
                        </li>
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Gaffer" id="Gaffer" />
                                <label for="Gaffer">Gaffer</label>
                            </div>
                        </li>
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Sound Designer" id="Sound Designer" />
                                <label for="Sound Designer">Sound Designer</label>
                            </div>
                        </li>
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Sound Editor" id="Sound Editor" />
                                <label for="Sound Editor">Sound Editor</label>
                            </div>
                        </li>
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Editor (General)" id="Editor (General)" />
                                <label for="Editor (General)">Editor (General)</label>
                            </div>
                        </li>
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Colorist" id="Colorist" />
                                <label for="Colorist">Colorist</label>
                            </div>
                        </li>
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Assistant Director" id="Assistant Director" />
                                <label for="Assistant Director">Assistant Director</label>
                            </div>
                        </li>
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Assistant Producer" id="Assistant Producer" />
                                <label for="Assistant Producer">Assistant Producer</label>
                            </div>
                        </li>

                        <!-- PA -->
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="PA" id="PA" />
                                <label for="PA">Production Assistant (PA)</label>
                            </div>
                        </li>

                        <!-- Grip -->
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Grip" id="Grip" />
                                <label for="Grip">Grip</label>
                            </div>
                        </li>

                        <!-- Composer -->
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Composer" id="Composer" />
                                <label for="Composer">Composer</label>
                            </div>
                        </li>

                        <!-- Production (Set) Designer -->
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Production (Set) Designer" id="Production (Set) Designer" />
                                <label for="Production (Set) Designer">Production (Set) Designer</label>
                            </div>
                        </li>

                        <!-- Sound Recordist -->
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Sound Recordist" id="Sound Recordist" />
                                <label for="Sound Recordist">Sound Recordist</label>
                            </div>
                        </li>

                        <!-- Costume Designer -->
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Costume Designer" id="Costume Designer" />
                                <label for="Costume Designer">Costume Designer</label>
                            </div>
                        </li>

                        <!-- Intimacy Coordinator -->
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Intimacy Coordinator" id="Intimacy Coordinator" />
                                <label for="Intimacy Coordinator">Intimacy Coordinator</label>
                            </div>
                        </li>

                        <!-- Fight Coordinator -->
                        <li class="w-full rounded-t-lg border-gray-200 dark:border-gray-600">
                            <div class="flex items-center py-2 gap-2">
                                <input class="checkbox checkbox-xs" type="checkbox" ref="checkbox" name="position" value="Fight Coordinator" id="Fight Coordinator" />
                                <label for="Fight Coordinator">Fight Coordinator</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- check if they are looking for actors with a checkbox. if there are, ask for the characters' names and descriptions -->
            <div class="px-4 py-4">
                <label class="flex flex-row items-center gap-4 justify-center label cursor-pointer text-primary-light" for="actors">
                    <span class="">Looking for actors?</span> 
                    <input class="checkbox checkbox-sm" type="checkbox" id="actors" v-model="actors" />
                </label>
            </div>

            <div v-auto-animate @submit.prevent="submitForm">
                <div v-if="actors" class="flex flex-col w-full px-4 py-4 gap-4">
                    <label class="text-primary-light">Characters Needed</label>
                    <ul class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50">
                        <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600" v-for="(character, index) in characters" :key="index">
                            <div class="flex flex-col py-2 gap-2">
                                <label class="text-primary-light" for="characterName">Character Name</label>
                                <input required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" v-model="character.name" placeholder="Enter character name" />

                                <label class="text-primary-light" for="characterDescription">Description</label>
                                <textarea required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" v-model="character.description" placeholder="Enter character description"></textarea>
                            </div>
                        </li>
                    </ul>
                    <button type="button" @click="addCharacter" class="btn w-full px-4 py-2 text-white bg-primary-light rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-light focus:ring-opacity-50">Add Another Character</button>
                </div>
            </div>



            <div class="px-4 py-4">
                <label class="flex flex-row items-center gap-4 justify-center label cursor-pointer text-primary-light" for="screening">
                    <span class="text-primary-light" for="screening">Is the film screening?</span>
                    <input class="checkbox checkbox-sm" type="checkbox" id="screening" v-model="screening" placeholder="Screening" />
                </label>
            </div>
            <div v-auto-animate>
                <div v-if="screening" class="flex flex-col gap-2 w-full px-4 py-4">
                    <label class="text-primary-light" for="screeningDate">Screening Date</label>
                    <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="date" id="screeningDate" v-model="screenDate" placeholder="Screening Date" />
                </div>
            </div>
            <!-- TODO: enable this field -->
            <div v-auto-animate>
                <div v-if="screening" class="flex flex-col gap-2 w-full px-4 py-4">
                    <label class="text-primary-light" for="screeningLocation">Screening Location</label>
                    <input class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="screeningLocation" v-model="screenLocation" placeholder="Screening Location" />
                </div>
            </div>


            <!-- TODO: add success modal -->
            <div class="flex flex-row justify-center w-full px-4 py-4">
                <button for="my-modal" class="btn w-full px-4 py-2 text-white bg-primary-light rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-light focus:ring-opacity-50">Submit</button>
            </div>

            <!-- showModal -->

        </form>
    </div>
</template>

<script>
import { db, storage } from "../firebase/index.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import store from "../store"

export default {
  data() {
    return {
      // Data properties from CreateView.vue
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
      actors: false,
      screenDate: '',
      user: store.getters.userEmail,
      characters: [{ name: '', description: '' }],
    };
  },
  mounted() {
    // Fetch the production data using the id from the URL
    const productionId = this.$route.params.id; // Assuming the id is a route parameter
    const productionRef = doc(db, "productions", productionId);
    getDoc(productionRef).then(doc => {
      if (doc.exists()) {
        const data = doc.data();
        // Populate the form fields with the fetched data
        this.title = data.title;
        this.tagline = data.tagline;
        this.contact = data.contact;
        this.description = data.description;
        this.director = data.director;
        this.producer = data.producer;
        this.genre = data.genre;
        this.posterUrl = data.posterUrl;
        this.mediaUrls = data.mediaUrls;
        this.shootStart = this.firestoreTimestampToDateInputValue(data.shootStart);
        this.shootEnd = this.firestoreTimestampToDateInputValue(data.shootEnd);
        this.positions = data.positions;
        this.vacancies = data.vacancies;
        this.screening = data.screening;
        this.actors = data.actors;
        this.screenDate = data.screenDate;
        this.user = data.user;
        this.characters = data.roles;
        this.allPositionsChecked();
      }
    });
  },
  methods: {
    async updateFilm() {
        const file = this.$refs.posterInput.files[0];
        
        // Check if the file is an image
        if (!file.type.startsWith('image/')) {
            alert('Only images are accepted for the poster.');
            return; 
        }

        const storageRef = ref(storage, `${this.title}/poster`);
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
            if (checkbox.value != "on") {
                this.positions.push(checkbox.value);
            }
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
        roles: this.characters,
      };
      const productionId = this.$route.params.id;
      const productionRef = doc(db, "productions", productionId);
      await updateDoc(productionRef, film);
    },

    addCharacter() {
        this.characters.push({ name: '', description: '' });
    },

    redirectToOpportunitiesForFilmmakers() {
        this.$router.push({ name: 'opportunitiesFilmmakers' });
    },

    firestoreTimestampToDateInputValue(timestamp) {
        if (timestamp === "TBD") {
            return "TBD";
        }
        const date = timestamp.toDate();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JS
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },
    allPositionsChecked() {
        return this.positions.every(position => position.checked);
    }
  },
};
</script>