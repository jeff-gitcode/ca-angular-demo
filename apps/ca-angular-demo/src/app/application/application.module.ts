import { NgModule } from "@angular/core";
import { ICustomerUseCase } from "./abstract/icustomer.usecase";
import { CustomerUseCase } from "./customers/customer.usecase";

@NgModule({
  providers: [
    { provide: ICustomerUseCase, useClass: CustomerUseCase },
  ],
})

export class ApplicationModule {} // Add missing export statement
