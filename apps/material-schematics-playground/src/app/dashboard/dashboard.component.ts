import { Component, ChangeDetectionStrategy, inject, HostBinding } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatIconButton } from '@angular/material/button';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { toSignal } from '@angular/core/rxjs-interop';

type Card = {
    title: string,
    cols: number,
    rows: number,
    hidden?: boolean
};

@Component({
    selector: 'sch-dashboard',
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatGridList,
        MatGridTile,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatIconButton,
        MatMenuTrigger,
        MatIcon,
        MatMenu,
        MatMenuItem,
        MatCardContent,
    ],
})
export class Dashboard {
    @HostBinding('class') classes = 'tw-block tw-p-5';

    /** Based on the screen size, switch from standard to one column per row */
    private readonly cards$ = inject(BreakpointObserver)
        .observe(Breakpoints.Handset)
        .pipe(
            map(({ matches }): Card[] => {
                if (matches) {
                    return [
                        { title: 'Card 1', cols: 1, rows: 1 },
                        { title: 'Card 2', cols: 1, rows: 1 },
                        { title: 'Card 3', cols: 1, rows: 1 },
                        { title: 'Card 4', cols: 1, rows: 1 },
                    ];
                }

                return [
                    { title: 'Card 1', cols: 2, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 2 },
                    { title: 'Card 4', cols: 1, rows: 1 },
                ];
            })
        );

    protected cards = toSignal(this.cards$);
}
