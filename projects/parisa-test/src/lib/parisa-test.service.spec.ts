import { TestBed } from '@angular/core/testing';

import { ParisaTestService } from './parisa-test.service';

describe('ParisaTestService', () => {
  let service: ParisaTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParisaTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
