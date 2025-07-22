import { Component } from '@angular/core';
import { CompareGhUsersStarsComponent } from './compare-gh-users-stars/compare-gh-users-stars';
import { MagicTextComponent } from './magic-text/magic-text.component';
import { HamburgerIngredientsComponent } from './hamburger-ingredients/hamburger-ingredients.component';

@Component({
    selector: 'd-root',
    templateUrl: './app.html',
    imports: [
        MagicTextComponent,
        CompareGhUsersStarsComponent,
        HamburgerIngredientsComponent,
    ],
    host: { class: 'block' }
})
export class AppComponent {}
