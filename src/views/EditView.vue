<!-- edit productions previously added for a signed-in user -->

<!-- TODO: change from edit to "View My Productions" -->
<template>
    <input type="checkbox" id="edit-modal" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Edit Production Details</h3>
            <p class="py-4">Modify the details of your film production below.</p>

            <div class="modal-action">
                <label for="edit-modal" class="btn">Close</label>
            </div>
        </div>
    </div>
    
    <div class="flex flex-col items-center min-h-screen py-2 pt-14">
        <h1 class="text-3xl font-bold text-primary-light">Edit a Production</h1>
        <p class="text-primary-light">Update the form below to modify the details of a screening, open positions on your set, or both.</p>

        <!-- Displaying User Films -->
        <section v-if="films.length > 0" class="flex flex-col items-center w-1/2 mt-10">
        <div v-for="film in films" :key="film.id" class="bg-white p-4 rounded-lg w-full mb-4 shadow-sm">
            <div class="flex justify-between align-middle">
                <div class="flex flex-col">
                    <h3 class="font-bold text-2xl mt-4 tracking-tighter">{{ film.title }}</h3>
                    <p><strong>Director:</strong> {{ film.director ? film.director : "N/A" }}</p>
                    <p><strong>Producer:</strong> {{ film.producer ? film.producer : "N/A" }}</p>
                </div>
            <div class="flex flex-row space-x-2">
                    <button 
                        @click="editFilm(film)" 
                        class="btn btn-primary"
                    >
                        Edit
                    </button>
                    <button 
                        @click=" () => (showDeleteModal = true) && (filmToDelete = film)" 
                        class="btn btn-primary bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
            <!-- Add more details here as needed based on your film object's properties -->
        </div>
    </section>
        
    </div>
    <!-- Modal -->
    <input type="checkbox" v-model="showDeleteModal" id="delete-modal" class="modal-toggle" />
    <div v-if="showDeleteModal" class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Are you sure?</h3>
            <p class="py-4">Do you really want to delete this production? This action cannot be undone.</p>
            <div class="modal-action">
                <button @click="deleteProduction" class="btn">Confirm</button>
                <label for="delete-modal" class="btn">Cancel</label>
            </div>
        </div>
    </div>
</template>


<script>
import { db, storage } from "../firebase/index.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, query, getDocs, where, doc, deleteDoc } from "firebase/firestore";
import store from "../store"

export default {
    data() {
        return {
            title: '',
            // ... other fields ...
            user: store.getters.userEmail,
            films: [],  // Array to hold the films for the user
            showDeleteModal: false,
            filmToDelete: ''
        };
    },
    methods: {
        // ... other methods ...

        async fetchUserFilms() {
            const userFilms = [];

            const productionsRef = collection(db, "productions");
            const q = query(productionsRef, where("user", "==", store.getters.userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                var film = doc.data();
                film.id = doc.id;
                userFilms.push(film);    
            });

            this.films = userFilms;  // Update the films array with the fetched films
        },

        async deleteProduction() {
            const productionRef = doc(db, "productions", this.filmToDelete.id);
            await deleteDoc(productionRef);
            this.fetchUserFilms();
            this.showDeleteModal = false;
        },

        editFilm(film) {
        // Logic for editing the film goes here
        // For example, you might navigate the user to an edit page or display an edit modal
        this.$router.push({ name: 'EditOne', params: { id: film.id } });
    }
    },
    created() {
        this.fetchUserFilms();  // Fetch the user's films when the component is created
    }
};
</script>
