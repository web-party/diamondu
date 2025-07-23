import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(App, {
    providers: [provideAnimations()]
})
    .catch(console.error);
