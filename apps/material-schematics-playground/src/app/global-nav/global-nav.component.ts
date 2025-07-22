import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'sch-global-nav',
    templateUrl: './global-nav.component.html',
    styleUrls: ['./global-nav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class GlobalNavComponent {
    private readonly isHandset$ = inject(BreakpointObserver)
        .observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );
    protected isNarrowViewport = toSignal(this.isHandset$);
}
