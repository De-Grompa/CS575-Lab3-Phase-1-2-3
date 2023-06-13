import { TestBed } from '@angular/core/testing';

import { ReadCsvService } from './read-csv.service';

describe('ReadCsvService', () => {
  let service: ReadCsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadCsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
