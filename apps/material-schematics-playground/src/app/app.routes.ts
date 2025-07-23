import { Route } from '@angular/router';
import { AddressForm } from './address-form/address-form.component';
import { Settings } from './settings/settings.component';
import { Dashboard } from './dashboard/dashboard.component';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: Dashboard
    },
    {
        path: 'address-form',
        component: AddressForm
    },
    {
        path: 'settings',
        component: Settings
    }
];
