import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalNav } from './global-nav.component';
import { provideRouter } from '@angular/router';

describe('GlobalNavComponent', () => {
    let component: GlobalNav;
    let fixture: ComponentFixture<GlobalNav>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [provideRouter([])]
        }).compileComponents();

        fixture = TestBed.createComponent(GlobalNav);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
