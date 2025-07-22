import { Component } from '@angular/core';

@Component({
    selector: 'sch-root',
    template: `<sch-global-nav />`,
    standalone: false
})
export class AppComponent {
    title = 'material-schematics-playground';
}
