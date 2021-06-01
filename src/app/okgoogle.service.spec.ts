import { TestBed } from '@angular/core/testing';

import { OkgoogleService } from './okgoogle.service';

describe('OkgoogleService', () => {
  let service: OkgoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OkgoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
