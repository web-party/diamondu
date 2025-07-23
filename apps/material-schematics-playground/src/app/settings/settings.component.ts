import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
    selector: 'sch-settings',
    templateUrl: './settings.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
    @HostBinding('class') classes = 'tw-block tw-p-5';
}
