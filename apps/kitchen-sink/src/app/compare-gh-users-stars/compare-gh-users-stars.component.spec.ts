import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareGhUsersStarsComponent } from './compare-gh-users-stars.component';

describe('CompareGhUsersStarsComponent', () => {
  let component: CompareGhUsersStarsComponent;
  let fixture: ComponentFixture<CompareGhUsersStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareGhUsersStarsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareGhUsersStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
