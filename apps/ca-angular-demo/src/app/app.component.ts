import { ApplicationModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavComponent } from './presentation/nav/nav.component';
import { CustomersComponent } from './presentation/customers/customers.component';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Component({
  standalone: true,
  imports: [ApplicationModule, InfrastructureModule, NavComponent, CustomersComponent, RouterModule],
  selector: 'ca-angular-demo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ca-angular-demo';
}
