import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { IAuthUseCase } from '../../application/abstract/iauth.usecase';
import { Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

describe('NavComponent', () => {
  let injector: Injector;
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let mockAuthService: { isLoggedIn: jest.Mock, isLoggedOut: jest.Mock, isLoggedInStatus: jest.Mock, loginSignal: jest.Mock, login: jest.Mock, logout: jest.Mock, getExpiration: jest.Mock };
  let isMockLoggedIn$: BehaviorSubject<boolean>;
  let router: Router;

  beforeEach(async () => {
    mockAuthService = {
      isLoggedIn: jest.fn(),
      isLoggedOut: jest.fn(),
      isLoggedInStatus: jest.fn(),
      loginSignal: jest.fn(),
      login: jest.fn(),
      logout: jest.fn(),
      getExpiration: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [NavComponent, RouterTestingModule.withRoutes([])],
      providers: [{
        provide: IAuthUseCase, useValue: mockAuthService
      }],
    }).compileComponents();

    isMockLoggedIn$ = new BehaviorSubject(false);
    jest.spyOn(mockAuthService, 'isLoggedInStatus').mockReturnValue(isMockLoggedIn$);
    fixture = TestBed.createComponent(NavComponent);

    router = TestBed.inject(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("should call logout", () => {
    component.logout();
    expect(mockAuthService.logout).toHaveBeenCalled();
  });
});
