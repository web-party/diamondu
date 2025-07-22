import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    AfterViewInit,
    ViewChild,
    // ViewChildren,
    // QueryList
} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
    selector: 'd-hamburger-ingredients',
    templateUrl: './hamburger-ingredients.component.html',
    styles: [`
        section {
            @apply w-full h-screen flex items-center justify-center text-[#aaa];
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'w-full h-full flex flex-col items-center bg-[#111]' }
})
export class HamburgerIngredientsComponent implements AfterViewInit {
    @ViewChild('hero') private hero!: ElementRef<SVGElement>;
    // images = viewChildren();
    // @ViewChildren(SVGImageElement) images!: QueryList<ElementRef<SVGImageElement>>;

    ngAfterViewInit(): void {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(this.hero.nativeElement, { duration: 1, opacity: 1, ease: 'power1.inOut' });

        gsap.timeline({
            scrollTrigger: {
                trigger: this.hero.nativeElement,
                start: '0 99%',
                end: '75% 0',
                scrub: 1
            }
        })
            //.from(this.images.toArray().map(el => el.nativeElement), {
            .from(this.hero.nativeElement.querySelectorAll('image'), {
                y: (i) => [0, 830, 435, 500, 670, 290, 280, 350, 300, 420, 560, 350][i],
                transformOrigin: '50%',
                rotate: (i) => [0, -12, -9, 4, 10, -5, -8, -9, 9, 4, -5, 3][i]
            });
    }
}
