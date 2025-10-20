import '@/assets/sass/main.scss'
import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify'

import App from '@/App.vue'
import router from '@/router/index'

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
