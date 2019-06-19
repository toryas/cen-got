import { TestBed } from '@angular/core/testing';

import { IceAndFireService } from './ice-and-fire.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IceAndFireService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: IceAndFireService = TestBed.get(IceAndFireService);
    expect(service).toBeTruthy();
  });

  
});
