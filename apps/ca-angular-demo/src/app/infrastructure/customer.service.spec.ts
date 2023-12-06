import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import {firstValueFrom} from 'rxjs';
import { TestBed } from "@angular/core/testing";
import { Injector } from "@angular/core";

import { CustomerService } from './customer.service';
import { Customer } from '../domain/customer';

describe('CustomerService', () => {
  let injector: Injector;
  let httpMock: HttpTestingController;
  let service: CustomerService;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });


    service = injector.get(CustomerService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    // httpMock.verify();
  });

  it('#create should return value', () => {
    const user: Customer = {
      id: "0",
      name: "Leanne Graham",
      email: "email",
      password: "password",
    };

    service.create(user).subscribe((data: Customer) => {
      expect(data).toEqual(user);
    });
  });

  it('#update should return value', () => {
    const user: Customer = {
      id: "0",
      name: "Leanne Graham",
      email: "email",
      password: "password",
    };

    service.update(user).subscribe((data: Customer) => {
      expect(data).toEqual(user);
    });
    
  });

});
