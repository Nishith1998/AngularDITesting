import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonLazyComponent } from './non-lazy.component';

describe('NonLazyComponent', () => {
  let component: NonLazyComponent;
  let fixture: ComponentFixture<NonLazyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonLazyComponent]
    });
    fixture = TestBed.createComponent(NonLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
