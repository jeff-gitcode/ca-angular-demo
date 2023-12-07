import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomersComponent } from './customers.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ICustomerUseCase } from '../../application/abstract/icustomer.usecase';
import { Customer } from '../../domain/customer';
import { of } from 'rxjs';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersComponent, RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: ICustomerUseCase,
          useValue: {
            getCustomers: jest.fn(),
            deleteCustomer: jest.fn(),
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

    jest.spyOn(TestBed.inject(ICustomerUseCase), 'getCustomers').mockReturnValue(of([user]));
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
