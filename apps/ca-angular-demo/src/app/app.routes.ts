import { Route } from '@angular/router';

import { LoginComponent } from './presentation/login/login.component';
import { NavComponent } from './presentation/nav/nav.component';
import { CustomersComponent } from './presentation/customers/customers.component';
import { CustomerComponent } from './presentation/customer/customer.component';
import { AuthGuard } from './auth.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NavComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'customer',
    component: CustomersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customer/details/:id',
    component: CustomerComponent,
    canActivate: [AuthGuard]
  },
];
