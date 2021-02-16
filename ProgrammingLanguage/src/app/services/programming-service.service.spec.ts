import { TestBed } from '@angular/core/testing';

import { ProgrammingServiceService } from './programming-service.service';

describe('ProgrammingServiceService', () => {
  let service: ProgrammingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
