import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressForm } from './address-form.component';

describe('AddressFormComponent', () => {
    let component: AddressForm;
    let fixture: ComponentFixture<AddressForm>;

    beforeEach(() => {
        fixture = TestBed.createComponent(AddressForm);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
