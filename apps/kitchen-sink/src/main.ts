import { enableProdMode, provideZonelessChangeDetection } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(App, {
    providers: [provideZonelessChangeDetection()]
})
    .catch(console.error);
