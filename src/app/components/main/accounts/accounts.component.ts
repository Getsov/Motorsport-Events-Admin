import { Component } from '@angular/core';
import { SectionNavComponent } from '../../shared/section-nav/section-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [SectionNavComponent, RouterOutlet],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss',
})
export class AccountsComponent {
  firstOption: string = 'Администраторски акаунти';
  secondOption: string = 'Организаторски акаунти';
  thirdOption: string = 'Потребителски акаунти';
}
