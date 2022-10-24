import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'mat-sch-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {}
