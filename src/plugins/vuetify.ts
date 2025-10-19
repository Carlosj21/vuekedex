import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          hunyadiYellow: '#eca539',
          fireBrick: '#c00e20',
          imperialRed: '#f22539',
          jet: '#353535',
          davysGray: '#5e5e5e',
          silver: '#bfbfbf',
          platinum: '#e8e8e8',
          whiteSmoke: '#f5f5f5',
          seasalt: '#f9f9f9',
        },
      },
    },
  },
})
