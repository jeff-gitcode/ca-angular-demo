import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IAuthUseCase } from '../../application/abstract/iauth.usecase';

@Component({
  selector: 'ca-angular-demo-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})

export class NavComponent implements OnInit {
  constructor(private authUseCase: IAuthUseCase) {

  }

  ngOnInit(): void {

  }

  logout() {
    this.authUseCase.logout();
  }
}
