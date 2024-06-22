import { TestBed } from '@angular/core/testing';

import { MausamService } from './mausam.service';

describe('MausamService', () => {
  let service: MausamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MausamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
