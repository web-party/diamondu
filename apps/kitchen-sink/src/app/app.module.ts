import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { MagicTextComponent } from './magic-text/magic-text.component';
import { CompareGhUsersStarsComponent } from './compare-gh-users-stars/compare-gh-users-stars.component';

@NgModule({
    declarations: [
        AppComponent,
        MagicTextComponent,
        CompareGhUsersStarsComponent,
    ],
    imports: [BrowserAnimationsModule, NgChartsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
