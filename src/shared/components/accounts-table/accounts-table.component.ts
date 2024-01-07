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
  // TODO:
  // 1. make the table yellow then its selected
  // 2. make select all to work
  // 3. add functionality to approve and delete buttons.
  // 4. Add sorting where is needed
  // 5. Check if the page is same as the design.
}
