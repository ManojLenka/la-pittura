import { TestBed } from '@angular/core/testing';

import { CheckSellerGuard } from './check-seller.guard';

describe('CheckSellerGuard', () => {
  let guard: CheckSellerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckSellerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
