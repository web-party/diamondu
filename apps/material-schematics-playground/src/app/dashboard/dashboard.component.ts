import { Component, ChangeDetectionStrategy, inject, HostBinding } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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
    standalone: false
})
export class DashboardComponent {
    @HostBinding('class') classes = 'tw-block tw-p-5';

    /** Based on the screen size, switch from standard to one column per row */
    cards = inject(BreakpointObserver).observe(Breakpoints.Handset).pipe(
        map(({ matches }): Card[] => {
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }

            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        })
    );
}
