import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

import { Customer } from '../../domain/customer';
import { IAuthUseCase } from '../../application/abstract/iauth.usecase';

@Component({
  selector: 'ca-angular-demo-login',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, FormlyModule, FormlyBootstrapModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(@Inject(IAuthUseCase)private authUseCase: IAuthUseCase, private router: Router) {

  }
  ngOnInit(): void {
    this.form = new FormGroup({});
  }
  form!: FormGroup;

  model: Customer = {
    id: '',
    name: 'admin',
    email: 'admin',
    password: 'admin',
    phone: '',
    website: '',
    company: {}
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'password',
      type: 'input',
      props: {
        label: 'Password',
        placeholder: 'Enter password',
        required: true,
      }
    }
  ];



  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      // this.router.navigateByUrl('/customer');
      // if (this.authUseCase.login(val.email, val.password)) {
      //   console.log("User is logged in");
        this.router.navigate(['/customer']);
        // this.router.navigateByUrl('/customer');
      // }
      // .subscribe(
      //     () => {
      //         console.log("User is logged in");
      //         this.router.navigateByUrl('/');
      //     }
      // );
    }
  }
}
