import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerComponent } from './customer.component';
import { ICustomerUseCase } from '../../application/abstract/icustomer.usecase';
import { RouterTestingModule } from '@angular/router/testing';
import { Customer } from '../../domain/customer';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerComponent, RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: ICustomerUseCase,
          useValue: {
            getCustomers: jest.fn(),
            deleteCustomer: jest.fn(),
            updateCustomer: jest.fn(),
          },
        }
      ],
    }).compileComponents();

    const user: Customer = {
      id: "0",
      name: "Leanne Graham",
      email: "email",
      password: "password",
    };

    jest.spyOn(TestBed.inject(ICustomerUseCase), 'updateCustomer').mockReturnValue(of(user));
    jest.spyOn(TestBed.inject(ICustomerUseCase), 'getCustomers').mockReturnValue(of([user]));
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("should call submit", () => {
    const navigationSpy = jest.spyOn(router, 'navigateByUrl');
    component.submit();
    expect(component).toBeTruthy();
    expect(TestBed.inject(ICustomerUseCase).updateCustomer).toHaveBeenCalled();
    expect(navigationSpy).toHaveBeenCalledWith('customer');
  });
});
