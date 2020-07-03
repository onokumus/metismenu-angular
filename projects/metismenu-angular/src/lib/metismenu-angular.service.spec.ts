import { TestBed } from '@angular/core/testing';

import { MetismenuAngularService } from './metismenu-angular.service';

describe('MetismenuAngularService', () => {
  let service: MetismenuAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetismenuAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
