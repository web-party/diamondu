import { Component } from '@angular/core';
import { GlobalNav } from './global-nav/global-nav.component';

@Component({
    selector: 'sch-root',
    template: `<sch-global-nav />`,
    imports: [GlobalNav]
})
export class App {
    title = 'material-schematics-playground';
}
