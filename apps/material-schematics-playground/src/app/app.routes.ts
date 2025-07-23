import { Route } from '@angular/router';
import { AddressForm } from './address-form/address-form.component';
import { Settings } from './settings/settings.component';
import { Dashboard } from './dashboard/dashboard.component';
import { FloorPlan } from './floor-plan/floor-plan';

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
    },
    {
        path: 'floor-plan',
        component: FloorPlan
    }
];
