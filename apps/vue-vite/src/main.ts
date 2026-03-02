import { createApp } from 'vue';
import App from './app/App.vue';
import './tw.css';

import vuetify from './create-vuetify';

createApp(App).use(vuetify).mount('#app');
