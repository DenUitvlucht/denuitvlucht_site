import { createApp } from 'vue'
import { initializeApp } from 'firebase/app'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'

const VITE_FB_API_KEY = import.meta.env.VITE_FB_API_KEY
const VITE_FB_AUTH_DOMAIN = import.meta.env.VITE_FB_AUTH_DOMAIN
const VITE_FB_DB_URL = import.meta.env.VITE_FB_DB_URL
const VITE_FB_PROJECT_ID = import.meta.env.VITE_FB_PROJECT_ID
const VITE_FB_STORAGE_BUCKET = import.meta.env.VITE_FB_STORAGE_BUCKET
const VITE_FB_MESSAGING_SENDER_ID = import.meta.env.VITE_FB_MESSAGING_SENDER_ID
const VITE_FB_APP_ID = import.meta.env.VITE_FB_APP_ID
const VITE_MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID

const firebaseConfig = {
  apiKey: VITE_FB_API_KEY,
  authDomain: VITE_FB_AUTH_DOMAIN,
  databaseURL: VITE_FB_DB_URL,
  projectId: VITE_FB_PROJECT_ID,
  storageBucket: VITE_FB_STORAGE_BUCKET,
  messagingSenderId: VITE_FB_MESSAGING_SENDER_ID,
  appId: VITE_FB_APP_ID,
  measurementId: VITE_MEASUREMENT_ID,
}

initializeApp(firebaseConfig)

loadFonts()

createApp(App).use(router)
  .use(vuetify)
  .mount('#app')