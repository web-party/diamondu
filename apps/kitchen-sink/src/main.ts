import { enableProdMode } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(App, {
    providers: [
        provideHttpClient(withFetch()),
    ],
})
    .catch(console.error);
