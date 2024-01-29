import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  effect,
} from '@angular/core';
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
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen: boolean = false;
  currentUser: User | undefined;

  constructor(public authService: AuthService) {
    effect(() => {
      this.currentUser = this.authService.currentUser();
    });
  }

  ngOnInit(): void {
    document.addEventListener('click', this.onClickOutsideMenu);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClickOutsideMenu = (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    const isClickInsideMenu = targetElement.closest('.navbar') !== null;
    const isClickOnHamburgerMenu =
      targetElement.closest('.hamburger-menu') !== null;

    if (!isClickInsideMenu && !isClickOnHamburgerMenu) {
      this.isMenuOpen = false;
    }
  };

  ngOnDestroy(): void {
    document.removeEventListener('click', this.onClickOutsideMenu);
  }
}
