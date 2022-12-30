import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {
        user: {
          loggedIn: false,
          data: null
        }
      },
    getters: {
        user(state){
          return state.user
        },
        username(state){
          return state.user.data.displayName
        },
        userEmail(state) {
          return state.user.data.email
        },
        userPhotoURL(state) {
          return state.user.data.photoURL
        }
      },
    mutations: {
        SET_LOGGED_IN(state, value) {
          state.user.loggedIn = value;
        },
        SET_USER(state, data) {
          state.user.data = data;
        }
      }      
})


export default store