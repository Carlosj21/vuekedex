import '@/assets/sass/main.scss'
import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify'
import pinia, { initStores } from '@/plugins/pinia'

import App from '@/App.vue'
import router from '@/router/index'

const app = createApp(App)

app.use(vuetify)
app.use(pinia)
;(async () => {
  await initStores()
  app.use(router)
  app.mount('#app')
})()
