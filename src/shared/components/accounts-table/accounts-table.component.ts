import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-accounts-table',
  standalone: true,
  imports: [],
  templateUrl: './accounts-table.component.html',
  styleUrl: './accounts-table.component.scss',
})
export class AccountsTableComponent {
  @Input() usersList: User[] = [];
}
