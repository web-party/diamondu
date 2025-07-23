import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MagicText } from './magic-text';

describe('MagicTextComponent', () => {
    let component: MagicText;
    let fixture: ComponentFixture<MagicText>;

    beforeEach(() => {
        fixture = TestBed.createComponent(MagicText);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
