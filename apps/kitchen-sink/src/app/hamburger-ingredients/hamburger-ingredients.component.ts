import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    AfterViewInit,
    viewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'd-hamburger-ingredients',
    templateUrl: './hamburger-ingredients.component.html',
    styles: [`
        @reference "../../tw.css";
        section {
            @apply w-full h-screen flex items-center justify-center text-zinc-400;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'w-full h-full flex flex-col items-center bg-zinc-950' }
})
export class HamburgerIngredients implements AfterViewInit {
    private readonly hero = viewChild.required<ElementRef<SVGElement>>('hero');

    ngAfterViewInit(): void {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(this.hero().nativeElement, {
            duration: 1,
            opacity: 1,
            ease: 'power1.inOut',
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.hero().nativeElement,
                start: '0 99%',
                end: '75% 0',
                scrub: 1
            }
        });
        gsap.context(() => {
            tl.from('image', {
                y: (i) => [0, 830, 435, 500, 670, 290, 280, 350, 300, 420, 560, 350][i],
                transformOrigin: '50%',
                rotate: (i) => [0, -12, -9, 4, 10, -5, -8, -9, 9, 4, -5, 3][i],
            });
        }, this.hero());
    }
}
