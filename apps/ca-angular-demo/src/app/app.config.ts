import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { appRoutes } from './app.routes';
import { IAuthService } from './application/abstract/iauth.service';
import { IAuthUseCase } from './application/abstract/iauth.usecase';
import { AuthUseCase } from './application/auth/auth.usecase';
import { AuthService } from './infrastructure/auth.service';
import { LocalStorageService } from './infrastructure/local-storage.service';

export const appConfig: ApplicationConfig = {
  providers: [

    provideHttpClient(),
    LocalStorageService,
    { provide: IAuthService, useClass: AuthService },
    { provide: IAuthUseCase, useClass: AuthUseCase },

    provideRouter(appRoutes)],
};
