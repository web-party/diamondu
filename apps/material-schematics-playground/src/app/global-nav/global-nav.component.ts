import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
    selector: 'mat-sch-global-nav',
    templateUrl: './global-nav.component.html',
    styleUrls: ['./global-nav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalNavComponent {
    private breakpointObserver = inject(BreakpointObserver);
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );
}
