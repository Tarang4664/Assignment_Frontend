import { TestBed } from '@angular/core/testing';

import { UpdateJsonDataService } from './update-json-data.service';

describe('UpdateJsonDataService', () => {
  let service: UpdateJsonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateJsonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
