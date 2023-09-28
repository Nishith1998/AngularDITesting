import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLayoutComponent } from './lazy-layout.component';

describe('LazyLayoutComponent', () => {
  let component: LazyLayoutComponent;
  let fixture: ComponentFixture<LazyLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyLayoutComponent]
    });
    fixture = TestBed.createComponent(LazyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
