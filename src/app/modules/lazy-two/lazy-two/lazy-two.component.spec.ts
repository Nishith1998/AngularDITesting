import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyTwoComponent } from './lazy-two.component';

describe('LazyTwoComponent', () => {
  let component: LazyTwoComponent;
  let fixture: ComponentFixture<LazyTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyTwoComponent]
    });
    fixture = TestBed.createComponent(LazyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
