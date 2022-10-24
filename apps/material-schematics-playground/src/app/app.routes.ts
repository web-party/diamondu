import { Route } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { SettingsComponent } from './settings/settings.component';

export const appRoutes: Route[] = [{
        path: 'address-form',
        component: AddressFormComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    }
];
