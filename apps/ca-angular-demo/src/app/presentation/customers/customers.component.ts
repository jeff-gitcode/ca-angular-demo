import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICustomerUseCase } from '../../application/abstract/icustomer.usecase';
import { Observable } from 'rxjs';
import { Customer } from '../../domain/customer';

@Component({
  selector: 'ca-angular-demo-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  @Output() editTodoEvent = new EventEmitter<any>();
  @Input() lastData: any;
  @Input() todos: any;
  customers$: Observable<Customer[]> =  new Observable<Customer[]>();
  newTodoTitle: string = '';
  testVar: any;

  constructor(private customerUseCase: ICustomerUseCase) { }

  ngOnInit(): void {
    this.customers$ = this.customerUseCase.getCustomers();
    // this.testVar = this.todos;
    // console.log('TEST: : : : ', this.testVar);
    // this.customerUseCase.getCustomers().subscribe((data: any) => {
    //   this.todos = data;
    //   console.log('data in list ::', this.todos);
    // });
  }


}
