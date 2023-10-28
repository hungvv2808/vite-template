import { createApp } from 'vue'
import '@/style.scss'
import router from '@/router'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App).use(pinia).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
