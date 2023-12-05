import { Component, Input, OnInit, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { IAuthUseCase } from '../../application/abstract/iauth.usecase';

@Component({
  selector: 'ca-angular-demo-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})

export class NavComponent implements OnInit {
  @Input() isLoggedIn: boolean | undefined;
  constructor(private authUseCase: IAuthUseCase, private router: Router) {
    this.authUseCase.isLoggedInStatus().subscribe((status) => {
      console.log('status', status);
      this.isLoggedIn = status;
    });
  }

  ngOnInit(): void {
    // this.isLoggedIn = this.authUseCase.loginSignal();
  }

  logout() {
    this.authUseCase.logout();
    this.router.navigate(['/login']);
  }
}
