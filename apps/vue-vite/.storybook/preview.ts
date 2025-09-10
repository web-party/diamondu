import { setup } from '@storybook/vue3-vite';
import vuetify from '../src/create-vuetify';
import { withVuetifyTheme } from './withVeutifyTheme.decorator';

setup(app => { app.use(vuetify); });

export const decorators = [withVuetifyTheme];
