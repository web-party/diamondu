import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
    withEnabledBlockingInitialNavigation,
    provideRouter,
    withViewTransitions
} from '@angular/router';
import { appRoutes } from './app/app.routes';
import { App } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(App, {
    providers: [
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
        provideAnimations(),
        provideRouter(appRoutes, withEnabledBlockingInitialNavigation(), withViewTransitions()),
    ]
})
    .catch((err) => console.error(err));
