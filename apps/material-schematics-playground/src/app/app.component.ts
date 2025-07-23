import { Component } from '@angular/core';
import { GlobalNavComponent } from './global-nav/global-nav.component';

@Component({
    selector: 'sch-root',
    template: `<sch-global-nav />`,
    imports: [GlobalNavComponent]
})
export class AppComponent {
    title = 'material-schematics-playground';
}
