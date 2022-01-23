import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import UiContainer from '@/components/ui/Container.vue'
import UiButton from '@/components/ui/Button.vue'
import UiIcon from '@/components/ui/Icon.vue'

const app = createApp(App)

app.component('UiContainer', UiContainer)
app.component('UiButton', UiButton)
app.component('UiIcon', UiIcon)

app.use(store).use(router).mount('#app')
