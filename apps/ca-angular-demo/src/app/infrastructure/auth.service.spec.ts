import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from "./auth.service";
import { TestBed } from "@angular/core/testing";
import { Injector } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { BehaviorSubject } from 'rxjs';

describe('AuthService', () => {
  let injector: Injector;
  let httpMock: HttpTestingController;
  let service: AuthService;
  let mockLocalStorageService!: { setItem: jest.Mock, removeItem: jest.Mock };
  let isMockLoggedIn$: BehaviorSubject<boolean>;

  beforeEach(() => {
    mockLocalStorageService = {
      setItem: jest.fn(),
      removeItem: jest.fn(),
    };
    injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, {provide: LocalStorageService, useValue: mockLocalStorageService}],
    });


    service = injector.get(AuthService);
    httpMock = injector.get(HttpTestingController);

    isMockLoggedIn$ = new BehaviorSubject(false);
    service.isLoggedIn$ = isMockLoggedIn$;
  });

  afterEach(() => {
    isMockLoggedIn$.complete();

    httpMock.verify();
  });

  it('#login should return value', () => {
    expect(service.login("email","password")).toBe(true);

    expect(mockLocalStorageService.setItem).toHaveBeenCalled();
  });

  it('#logout should return value', () => {
    service.logout();

    expect(mockLocalStorageService.removeItem).toHaveBeenCalled();
  });

});
