import { TestBed } from '@angular/core/testing';

import { ClienteservicesService } from './clienteservices.service';

describe('ClienteservicesService', () => {
  let service: ClienteservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
