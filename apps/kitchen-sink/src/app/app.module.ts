import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MagicTextComponent } from './magic-text/magic-text.component';
import { CompareGhUsersStarsComponent } from './compare-gh-users-stars/compare-gh-users-stars.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        NxWelcomeComponent,
        MagicTextComponent,
        CompareGhUsersStarsComponent,
    ],
    imports: [BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
