import { createApp } from 'vue';
import App from './app/App.vue';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import './styles.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { md3 } from 'vuetify/blueprints';

const vuetify = createVuetify({
    components,
    directives,
    theme: { defaultTheme: 'dark' },
    blueprint: md3
});

createApp(App).use(vuetify).mount('#app');
