import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav.component';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [SectionNavComponent, RouterOutlet],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss',
})
export class AccountsComponent {
  // TODO: make te hasData property dynamic
  options = [
    {
      label: 'Администраторски акаунти',
      route: 'admin-accounts',
      hasData: true,
    },
    {
      label: 'Организаторски акаунти',
      route: 'organizer-accounts',
      hasData: false,
    },
    { label: 'Потребителски акаунти', route: 'user-accounts', hasData: true },
  ];

  constructor(private router: Router) {}
  ngOnInit() {}
}
