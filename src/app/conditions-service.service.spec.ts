import { TestBed } from '@angular/core/testing';

import { ConditionsServiceService } from './conditions-service.service';

describe('ConditionsServiceService', () => {
  let service: ConditionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
