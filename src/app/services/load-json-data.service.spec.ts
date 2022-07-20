import { TestBed } from '@angular/core/testing';

import { LoadJsonDataService } from './load-json-data.service';

describe('LoadJsonDataService', () => {
  let service: LoadJsonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadJsonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
