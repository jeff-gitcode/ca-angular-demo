import { TestBed } from '@angular/core/testing';
import { Injector } from "@angular/core";

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let injector: Injector;
  let httpMock: HttpTestingController;
  let router: Router;
  let navigateSpy: jest.SpyInstance;

  beforeEach(async () => {
    injector = await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AppComponent, RouterTestingModule.withRoutes([])],
    }).compileComponents();

    router = TestBed.inject(Router);
    // httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {

    // httpMock.verify();
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome ca-angular-demo'
    );
  });

  it(`should have as title 'ca-angular-demo'`, () => {
    navigateSpy = jest.spyOn(router, 'navigate');
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ca-angular-demo');
  });
});
