import { TestBed } from '@angular/core/testing';

import { ClasslistserviceService } from './classlistservice.service';

describe('ClasslistserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClasslistserviceService = TestBed.get(ClasslistserviceService);
    expect(service).toBeTruthy();
  });
});
