import { ChangeDetectionStrategy, Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
    selector: 'd-hamburger-ingredients',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hamburger-ingredients.component.html',
    styleUrl: './hamburger-ingredients.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HamburgerIngredientsComponent implements AfterViewInit {
    @ViewChild('hero') private hero!: ElementRef;

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
            .from(this.hero.nativeElement.querySelectorAll('image'), {
                y: (i) => [0, 830, 435, 500, 670, 290, 280, 350, 300, 420, 560, 350][i],
                transformOrigin: '50%',
                rotate: (i) => [0, -12, -9, 4, 10, -5, -8, -9, 9, 4, -5, 3][i]
            });
    }
}
