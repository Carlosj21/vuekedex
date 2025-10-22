import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const hunyadiYellow = '#eca539'
const fireBrick = '#c00e20'
const imperialRed = '#f22539'
const jet = '#353535'
const davysGray = '#5e5e5e'
const silver = '#bfbfbf'
const platinum = '#e8e8e8'
const whiteSmoke = '#f5f5f5'
const seasalt = '#f9f9f9'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: imperialRed,
          secondary: hunyadiYellow,
          hunyadiYellow,
          fireBrick,
          imperialRed,
          jet,
          davysGray,
          silver,
          platinum,
          whiteSmoke,
          seasalt,
        },
      },
    },
  },
})
