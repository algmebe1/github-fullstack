import { TestBed } from '@angular/core/testing';

import { RepolistService } from './repolist.service';

describe('RepolistService', () => {
  let service: RepolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
