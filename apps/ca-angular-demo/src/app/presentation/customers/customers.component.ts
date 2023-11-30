import { Component, EventEmitter, Inject, Input, OnInit, Output, Signal, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICustomerUseCase } from '../../application/abstract/icustomer.usecase';
import { Observable } from 'rxjs';
import { Customer } from '../../domain/customer';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { ApplicationModule } from '../../application/application.module';

@Component({
  selector: 'ca-angular-demo-customers',
  standalone: true,
  imports: [CommonModule, ApplicationModule, InfrastructureModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  @Output() editTodoEvent = new EventEmitter<any>();
  @Input() lastData: any;
  @Input() customers: Signal<Customer[]> = signal([]);

  newTodoTitle: string = '';
  testVar: any;

  constructor(@Inject(ICustomerUseCase)private customerUseCase: ICustomerUseCase) { }

  ngOnInit(): void {
    this.customers = this.customerUseCase.getCustomers();

    // this.testVar = this.todos;
    // console.log('TEST: : : : ', this.testVar);
    // this.customerUseCase.getCustomers().subscribe((data: any) => {
    //   this.todos = data;
    //   console.log('data in list ::', this.todos);
    // });
  }

  createCustomer(): void {
    const customer: Customer = {
      id: '1',
      name: "John Doe",
      email: "john.doe@email.com",
      password: '1234567890',
      token: ""
    };

    this.customerUseCase.createCustomer(customer);
  }


}
