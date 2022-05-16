// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Vuetify
import { createVuetify } from 'vuetify'
import { ThemeDefinition } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      dark: {
        colors: {
          primary: '#0A406A', // Jeugdhuis Blauw
          background: '#222423', // Jeugdhuis Grijs
          secondary: '#ffffff', // Wit voor tekst
          alert: '#ffffff',
          card: '#2e3030',
          buttonbg: '#222423',
          buttontext: '#ffffff',
          active: '#ffffff',
          switch: '#ffffff'

        }
      },
      light: {
        colors: {
          primary: '#0A406A', // Jeugdhuis Blauw
          background: '#FFFFFF', // Wit
          secondary: '#222423', // Jeugdhuis Grijs voor tekst
          alert: '#0A406A',
          card: '#ffffff',
          buttonbg: '#FFFFFF',
          buttontext: '#0A406A',
          active: '#0A406A',
          switch: '#ffffff'
        }
      }
    }
  }
})


