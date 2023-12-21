import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  LogoIconSrc: string = '/src/assets/icons/app-logo.png';
}
