import { NgModule } from "@angular/core";

import { ICustomerRepository } from "../application/abstract/irepository";
import { CustomerRepository } from "./customer.repository";

@NgModule({
  providers: [
    { provide: ICustomerRepository, useClass: CustomerRepository },
  ],
})

export class InfrastructureModule {}
