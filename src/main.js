import { createApp } from 'vue'
import { initializeApp } from 'firebase/app'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'


const VITE_FB_API_KEY = Buffer.from(import.meta.env.VITE_FB_API_KEY, 'base64').toString('utf-8')
const VITE_FB_AUTH_DOMAIN = Buffer.from(import.meta.env.VITE_FB_AUTH_DOMAIN, 'base64').toString('utf-8')
const VITE_FB_DB_URL = Buffer.from(import.meta.env.VITE_FB_DB_URL, 'base64').toString('utf-8')
const VITE_FB_PROJECT_ID = Buffer.from(import.meta.env.VITE_FB_PROJECT_ID, 'base64').toString('utf-8')
const VITE_FB_STORAGE_BUCKET = Buffer.from(import.meta.env.VITE_FB_STORAGE_BUCKET, 'base64').toString('utf-8')
const VITE_FB_MESSAGING_SENDER_ID = Buffer.from(import.meta.env.VITE_FB_MESSAGING_SENDER_ID, 'base64').toString('utf-8')
const VITE_FB_APP_ID = Buffer.from(import.meta.env.VITE_FB_APP_ID, 'base64').toString('utf-8')
const VITE_MEASUREMENT_ID = Buffer.from(import.meta.env.VITE_MEASUREMENT_ID, 'base64').toString('utf-8')

console.log(VITE_FB_PROJECT_ID)


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