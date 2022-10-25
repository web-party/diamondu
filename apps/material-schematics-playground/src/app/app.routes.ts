import { Route } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent
    },
    {
        path: 'address-form',
        component: AddressFormComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    }
];
