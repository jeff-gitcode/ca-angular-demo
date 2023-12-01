import { Component } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NxWelcomeComponent } from './nx-welcome.component';
import { NavComponent } from './presentation/nav/nav.component';
import { CustomersComponent } from './presentation/customers/customers.component';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApplicationModule } from './application/application.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { IAuthService } from './application/abstract/iauth.service';
import { AuthService } from './infrastructure/auth.service';
import { AuthGuard } from './auth.guard';
import { IAuthUseCase } from './application/abstract/iauth.usecase';
import { AuthUseCase } from './application/auth/auth.usecase';
import { AppModule } from './app.module';

@Component({
  standalone: true,
  imports: [AppModule, FormsModule, RouterModule, ReactiveFormsModule, FormlyModule, FormlyBootstrapModule, NavComponent],
  selector: 'ca-angular-demo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: IAuthService, useClass: AuthService },
    // { provide: IAuthUseCase,  useClass: AuthUseCase}
  ],
})
export class AppComponent {
  title = 'ca-angular-demo';
}
