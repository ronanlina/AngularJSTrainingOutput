import { TestBed, inject } from '@angular/core/testing';

import { StudentwService } from './studentw.service';

describe('StudentwService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentwService]
    });
  });

  it('should be created', inject([StudentwService], (service: StudentwService) => {
    expect(service).toBeTruthy();
  }));
});
