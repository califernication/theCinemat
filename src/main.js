import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import "./tailwind.css"
import "./styles/styles.css"
import 'flowbite';

const app = createApp(App)

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')

// TODO: add a 404 page
// TODO: add auto-animate https://auto-animate.formkit.com/#usage
// TODO: make links (buttons and href text actually direct somewher)