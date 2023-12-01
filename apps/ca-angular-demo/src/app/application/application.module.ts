import { NgModule } from "@angular/core";

import { ICustomerUseCase } from "./abstract/icustomer.usecase";
import { CustomerUseCase } from "./customers/customer.usecase";
import { IAuthUseCase } from "./abstract/iauth.usecase";
import { AuthUseCase } from "./auth/auth.service";

@NgModule({
  providers: [
    { provide: ICustomerUseCase, useClass: CustomerUseCase },
    { provide: IAuthUseCase, useClass: AuthUseCase },
  ],
})

export class ApplicationModule {} // Add missing export statement
