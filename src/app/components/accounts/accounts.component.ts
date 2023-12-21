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
  options = [
    { label: 'Администраторски акаунти', route: 'admin-accounts' },
    { label: 'Организаторски акаунти', route: 'organizer-accounts' },
    { label: 'Потребителски акаунти', route: 'user-accounts' },
  ];

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/accounts/admin-accounts']);
  }
}
