import { Component } from '@angular/core';
import { CompareGhUsersStarsComponent } from './compare-gh-users-stars/compare-gh-users-stars.component';
import { MagicTextComponent } from './magic-text/magic-text.component';

@Component({
    selector: 'd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [MagicTextComponent, CompareGhUsersStarsComponent]
})
export class AppComponent {}
