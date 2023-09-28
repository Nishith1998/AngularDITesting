import { TestBed } from '@angular/core/testing';

import { NonLazyService } from './non-lazy.service';

describe('NonLazyService', () => {
  let service: NonLazyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonLazyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
