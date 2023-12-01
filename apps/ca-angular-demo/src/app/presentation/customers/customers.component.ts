import { Component, EventEmitter, Inject, Input, OnInit, Output, Signal, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICustomerUseCase } from '../../application/abstract/icustomer.usecase';
import { Observable } from 'rxjs';
import { Customer } from '../../domain/customer';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { ApplicationModule } from '../../application/application.module';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'ca-angular-demo-customers',
  standalone: true,
  imports: [RouterModule, CommonModule, ApplicationModule, InfrastructureModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  @Output() editTodoEvent = new EventEmitter<any>();
  @Input() lastData: any;
  @Input() customers: Signal<Customer[]> = signal([]);
  @Input() customer: Customer = {} as Customer;

  newTodoTitle: string = '';
  testVar: any;

  constructor(@Inject(ICustomerUseCase) private customerUseCase: ICustomerUseCase) {
    this.customers = toSignal(this.customerUseCase.getCustomers(), { initialValue: [] });
  }

  ngOnInit(): void {

    // this.testVar = this.todos;
    // console.log('TEST: : : : ', this.testVar);
    // this.customerUseCase.getCustomers().subscribe((data: any) => {
    //   this.todos = data;
    //   console.log('data in list ::', this.todos);
    // });
  }

  // createCustomer(): void {
  //   const customer: Customer = {
  //     id: '1',
  //     name: "John Doe",
  //     email: "john.doe@email.com",
  //     phone: "1234567890",
  //     website: "www.johndoe.com",
  //     company: {}
  //   };

  //   this.customerUseCase.createCustomer(customer).subscribe((data: any) => {
  //     console.log('create data in list ::', data);
  //     this.customer = data;
  //     this.customers.update(r => [...r, data]);
  //   });
  //   // this.customer = toSignal(user$, { initialValue: {} as Customer });
  // }

  // updateCustomer(): void {
  //   const customer: Customer = {
  //     id: '11',
  //     name: "John Doe Update",
  //     email: "john.doe@email.com",
  //     phone: "1234567890",
  //     website: "www.johndoe.com",
  //     company: {}
  //   };

  //   this.customerUseCase.updateCustomer(customer).subscribe((data: any) => {
  //     console.log('update data in list ::', data);
  //     this.customer = data;
  //     // this.customers.update(r => {
  //     //   console.log('r ::', r);
  //     //   return [...(r.filter((item: Customer) => item.id.toString() !== data.id)), data];
  //     // });
  //   });
  // }

  deleteCustomer(id: string) {
    //const id = "11";
    this.customerUseCase.deleteCustomer(id).subscribe((data: any) => {
      console.log('delete data in list ::', data);
      this.customer = data;
      // this.customers.update(r => {
      //   console.log('r ::', r);
      //   return [...(r.filter((item: Customer) => item.id.toString() !== id))];
      // });
    });
  }
}
