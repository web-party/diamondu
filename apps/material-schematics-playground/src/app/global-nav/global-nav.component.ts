import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatNavList, MatListItem, MatListItemIcon } from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
    selector: 'sch-global-nav',
    templateUrl: './global-nav.component.html',
    styleUrls: ['./global-nav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatSidenavContainer, MatSidenav, MatToolbar, MatNavList, MatListItem, RouterLink, RouterLinkActive, MatIcon, MatListItemIcon, MatSidenavContent, MatIconButton, RouterOutlet]
})
export class GlobalNav {
    private readonly isHandset$ = inject(BreakpointObserver)
        .observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );
    protected isNarrowViewport = toSignal(this.isHandset$);
}
