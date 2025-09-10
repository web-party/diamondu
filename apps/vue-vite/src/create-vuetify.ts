import './styles.scss';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { md3 } from 'vuetify/blueprints';

export default createVuetify({
    components,
    directives,
    theme: { defaultTheme: 'dark' },
    blueprint: md3
});
