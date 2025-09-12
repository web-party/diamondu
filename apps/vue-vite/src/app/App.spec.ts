import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from './App.vue';
import vuetify from '../create-vuetify';

describe('App', () => {
    it('renders properly', () => {
        const wrapper = mount(App, { global: { plugins: [vuetify] }});
        expect(wrapper.text()).toContain('IBAN:');
    });
});
