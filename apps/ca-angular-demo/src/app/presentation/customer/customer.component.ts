import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyForm, FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { Customer } from '../../domain/customer';
import { ICustomerUseCase } from '../../application/abstract/icustomer.usecase';
import { Router } from '@angular/router';

@Component({
  selector: 'ca-angular-demo-customer',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, FormlyModule, FormlyBootstrapModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  form!: FormGroup;
  model: Customer = {
    id: '',
    name: '',
    email: '',
    phone: '',
    website: '',
    company: {}
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Name',
        placeholder: 'Enter name',
        required: true,
      }
    },
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email',
        placeholder: 'Enter email',
        required: true,
      }
    }
    ,
    {
      key: 'phone',
      type: 'input',
      props: {
        label: 'Phone',
        placeholder: 'Enter phone',
        required: false,
      }
    }
  ];

  constructor(@Inject(ICustomerUseCase) private customerUseCase: ICustomerUseCase, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({});
    // this.form = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required]),
    //   phone: new FormControl(''),
    // });
  }

  // get f(){
  //   return this.form.controls;
  // }

  submit() {
    console.log(this.form.value);

    this.customerUseCase.createCustomer(this.model).subscribe((data: any) => {
      console.log('create data in list ::', data);
      this.model = data;
    });

    this.router.navigateByUrl('customer');
  }
}
