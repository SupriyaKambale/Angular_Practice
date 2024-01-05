import { TestBed } from '@angular/core/testing';

import { DesignutilityserviceService } from './designutilityservice.service';

describe('DesignutilityserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignutilityserviceService = TestBed.get(DesignutilityserviceService);
    expect(service).toBeTruthy();
  });
});
