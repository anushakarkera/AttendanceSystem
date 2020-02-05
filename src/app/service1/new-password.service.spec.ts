import { TestBed } from '@angular/core/testing';

import { NewPasswordService } from './new-password.service';

describe('NewPasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewPasswordService = TestBed.get(NewPasswordService);
    expect(service).toBeTruthy();
  });
});
