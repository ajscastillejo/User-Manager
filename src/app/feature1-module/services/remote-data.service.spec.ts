import { TestBed } from '@angular/core/testing';

import { RemoteDataService } from './remote-data.service';

describe('RemoteDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoteDataService = TestBed.get(RemoteDataService);
    expect(service).toBeTruthy();
  });
});
