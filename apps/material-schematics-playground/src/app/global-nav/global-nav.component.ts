import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
    selector: 'sch-global-nav',
    templateUrl: './global-nav.component.html',
    styleUrls: ['./global-nav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class GlobalNavComponent {
    isHandset$: Observable<boolean> = inject(BreakpointObserver).observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );
}
