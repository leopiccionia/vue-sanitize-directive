import { createApp } from 'vue'
import VueSanitize from 'vue-sanitize-directive'

import App from './App.vue'

createApp(App).use(VueSanitize).mount('#app')
