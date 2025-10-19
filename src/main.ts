import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify'

import App from '@/App.vue'
import router from '@/router/index'
import '@/assets/sass/main.scss'

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
