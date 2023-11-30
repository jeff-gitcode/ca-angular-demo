import { NgModule } from "@angular/core";

import { ICustomerRepository } from "../application/abstract/irepository";
import { CustomerRepository } from "./customer.repository";
import { ICustomerService } from "../application/abstract/icustomer.service";
import { CustomerService } from "./customer.service";

@NgModule({
  providers: [
    { provide: ICustomerRepository, useClass: CustomerRepository },
    { provide: ICustomerService, useClass: CustomerService },
  ],
})

export class InfrastructureModule {}
