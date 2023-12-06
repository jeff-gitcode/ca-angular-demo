import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { IAuthUseCase } from '../../application/abstract/iauth.usecase';
import { Injector } from '@angular/core';

describe('NavComponent', () => {
  let injector: Injector;
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let mockAuthService: { isLoggedIn: jest.Mock };

  beforeEach(async () => {
    injector =await TestBed.configureTestingModule({
      imports: [NavComponent, RouterTestingModule.withRoutes([])],
      providers: {
        provide: IAuthUseCase, useClass: mockAuthService
      }
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
