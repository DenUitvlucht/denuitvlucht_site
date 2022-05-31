import { createApp } from 'vue'
import { initializeApp } from 'firebase/app'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyD11fqf_5cf68VGdf9c1XwAZ3HapqL9Y6g',
  authDomain: 'polldenuitvluchtdjcontest.firebaseapp.com',
  projectId: 'polldenuitvluchtdjcontest',
  storageBucket: 'polldenuitvluchtdjcontest.appspot.com',
  messagingSenderId: '243388107304',
  appId: '1:243388107304:web:76b6b4678541e4fe8dc31d',
  measurementId: 'G-Z6LQ66T9V5',
}

initializeApp(firebaseConfig)

loadFonts()

createApp(App).use(router)
  .use(vuetify)
  .mount('#app')
