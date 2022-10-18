import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { interval, Observable, repeat } from 'rxjs';
import { map, scan, take } from 'rxjs/operators';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'd-magic-text',
    templateUrl: './magic-text.component.html',
    styleUrls: ['./magic-text.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('myInsertRemoveTrigger', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('300ms ease-in', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate('300ms', style({ opacity: 0 }))])
        ])
    ]
})
export class MagicTextComponent implements OnInit {
    private title = 'kitchen sink';
    characters$!: Observable<string[]>;
    @HostBinding('class') classes = 'block p-5 max-w-4xl text-6xl font-bold tracking-wide';

    ngOnInit(): void {
        this.characters$ = interval(400).pipe(
            take(this.title.length),
            map(v => this.title[v]),
            scan<string, string[]>((acc, curr) => [...acc, curr], []),
            repeat(3)
        );
    }
}
