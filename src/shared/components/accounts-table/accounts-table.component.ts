import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/User';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accounts-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './accounts-table.component.html',
  styleUrl: './accounts-table.component.scss',
})
export class AccountsTableComponent {
  @Input() usersList: User[] = [];
}
