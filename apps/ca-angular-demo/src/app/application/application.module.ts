import { NgModule } from "@angular/core";

import { ICustomerUseCase } from "./abstract/icustomer.usecase";
import { CustomerUseCase } from "./customers/customer.usecase";
import { IAuthUseCase } from "./abstract/iauth.usecase";
import { AuthUseCase } from "./auth/auth.usecase";

@NgModule({
  providers: [
    { provide: IAuthUseCase, useClass: AuthUseCase },
    { provide: ICustomerUseCase, useClass: CustomerUseCase },
  ],
})

export class ApplicationModule {} // Add missing export statement
