import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';
import { User } from '../../../../shared/interfaces/User';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [RouterLink, RouterLinkActive, CommonModule],
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  currentUser: User | undefined;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
