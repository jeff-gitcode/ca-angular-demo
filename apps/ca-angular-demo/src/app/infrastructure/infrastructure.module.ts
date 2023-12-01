import { NgModule } from "@angular/core";

import { ICustomerRepository } from "../application/abstract/irepository";
import { CustomerRepository } from "./customer.repository";
import { ICustomerService } from "../application/abstract/icustomer.service";
import { CustomerService } from "./customer.service";
import { IAuthService } from "../application/abstract/iauth.service";
import { AuthService } from "./auth.service";

@NgModule({
  providers: [
    { provide: IAuthService, useClass: AuthService  },
    { provide: ICustomerRepository, useClass: CustomerRepository },
    { provide: ICustomerService, useClass: CustomerService }
  ],
})

export class InfrastructureModule {}
