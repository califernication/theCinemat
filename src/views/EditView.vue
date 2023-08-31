<!-- edit productions previously added for a signed-in user -->

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

        <form class="flex flex-col flex-wrap min-w-full px-96 py-4" @submit.prevent="updateFilm">
            <!-- The form fields here are mostly the same as your 'Create' form, 
            since we're just editing the previously provided data. 
            Just changed placeholders and v-models to fit the edit context. -->
            
            <div class="flex flex-col gap-2 w-full px-4 py-4">
                <label class="text-primary-light" for="title">Title</label>
                <input required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50" type="text" id="title" v-model="editTitle" placeholder="Enter film title"/>
            </div>
            <!-- ... You'd continue like this, mimicking the structure from the 'Create' form. ... -->

            <!-- And then, at the end, you might have a save button: -->
            <div class="flex justify-center mt-4">
                <button type="submit" class="btn btn-primary">Save Changes</button>
            </div>
        </form>

        <!-- Displaying User Films -->
        <section v-if="films.length > 0" class="flex flex-col items-center mt-10">
        <h2 class="text-2xl font-bold text-primary-light mb-4">Your Films</h2>
        <div v-for="film in films" :key="film.id" class="bg-white p-4 rounded-lg w-full mb-4 shadow-sm">
            <div class="flex justify-between">
                <h3 class="font-bold">{{ film.title }}</h3>
                <button 
                    @click="editFilm(film)" 
                    class="btn btn-primary"
                >
                    Edit
                </button>
            </div>
            <p><strong>Director:</strong> {{ film.director }}</p>
            <p><strong>Producer:</strong> {{ film.producer }}</p>
            <!-- Add more details here as needed based on your film object's properties -->
        </div>
    </section>
        
    </div>
</template>


<script>
import { db, storage } from "../firebase/index.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, query, getDocs, where } from "firebase/firestore";
import store from "../store"

export default {
    data() {
        return {
            title: '',
            // ... other fields ...
            user: store.getters.userEmail,
            films: []  // Array to hold the films for the user
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
