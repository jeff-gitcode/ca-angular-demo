import { Route } from '@angular/router';
import { LoginComponent } from './presentation/login/login.component';
import { NavComponent } from './presentation/nav/nav.component';
import { CustomersComponent } from './presentation/customers/customers.component';

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
    path: 'dashboard',
    component: CustomersComponent
  },
];
