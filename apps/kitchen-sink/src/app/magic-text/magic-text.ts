import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { interval } from 'rxjs';
import { map, repeat, scan, take } from 'rxjs/operators';
import { animate, style, transition, trigger } from '@angular/animations';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'd-magic-text',
    templateUrl: './magic-text.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('fadeInChar', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('300ms ease-in', style({ opacity: 1 }))
            ])
        ])
    ],
    host: { class: 'block p-5 max-w-6xl text-6xl font-bold tracking-wide' }
})
export class MagicTextComponent {
    readonly title = input('kitchen sink');
    private characters$ = interval(400).pipe(
        take(this.title().length + 1),
        map(v => this.title()[v]),
        scan<string, string[]>((acc, curr) => [...acc, curr], []),
        repeat(3)
    );
    protected readonly characters = toSignal(this.characters$);
}
