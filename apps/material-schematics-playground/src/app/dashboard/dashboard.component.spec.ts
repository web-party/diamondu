import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard } from './dashboard.component';

describe('DashboardComponent', () => {
    let component: Dashboard;
    let fixture: ComponentFixture<Dashboard>;

    beforeEach(() => {
        fixture = TestBed.createComponent(Dashboard);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
