import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav.component';

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
