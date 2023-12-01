import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NxWelcomeComponent } from './nx-welcome.component';
import { NavComponent } from './presentation/nav/nav.component';
import { CustomersComponent } from './presentation/customers/customers.component';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApplicationModule } from './application/application.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@Component({
  standalone: true,
  imports: [RouterModule, ApplicationModule, InfrastructureModule, FormsModule, ReactiveFormsModule, FormlyModule, FormlyBootstrapModule, NavComponent, CustomersComponent],
  selector: 'ca-angular-demo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ca-angular-demo';
}
