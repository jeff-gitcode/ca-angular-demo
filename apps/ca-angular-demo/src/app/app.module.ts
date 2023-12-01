import { ApplicationModule, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";
import { AuthGuard } from "./auth.guard";
import { IAuthUseCase } from "./application/abstract/iauth.usecase";
import { AuthUseCase } from "./application/auth/auth.usecase";

@NgModule({
  imports: [ApplicationModule, InfrastructureModule],
  providers: [
    {provide: IAuthUseCase, useClass: AuthUseCase},
    // AuthGuard,
  ],
  exports: [ApplicationModule],
})

export class AppModule { }
