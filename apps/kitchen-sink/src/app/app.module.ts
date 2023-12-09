import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MagicTextComponent } from './magic-text/magic-text.component';
import { CompareGhUsersStarsComponent } from './compare-gh-users-stars/compare-gh-users-stars.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserAnimationsModule, MagicTextComponent, CompareGhUsersStarsComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
