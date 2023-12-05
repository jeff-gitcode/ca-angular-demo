import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from "./auth.service";
import { TestBed } from "@angular/core/testing";
import { Injector } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

describe('AuthService', () => {
  let injector: Injector;
  let httpMock: HttpTestingController;
  let service: AuthService;
  beforeEach(() => {
    let data: any = {};

    injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, {provide: LocalStorageService, useValue: jasmine.createSpyObj('LocalStorageService', ['setItem'])}],
    });

    service = injector.get(AuthService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('#getValue should return real value', () => {
    expect(service.login("email","password")).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
