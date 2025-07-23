import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CompareGhUsersStars } from './compare-gh-users-stars/compare-gh-users-stars';
import { MagicText } from './magic-text/magic-text';
import { HamburgerIngredients } from './hamburger-ingredients/hamburger-ingredients.component';

@Component({
    selector: 'd-root',
    templateUrl: './app.html',
    imports: [
        MagicText,
        CompareGhUsersStars,
        HamburgerIngredients,
    ],
    host: { class: 'block' },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
