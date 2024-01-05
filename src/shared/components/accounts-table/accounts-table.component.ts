import { Component } from '@angular/core';
import { AccountTableRowComponent } from './account-table-row/account-table-row.component';

@Component({
  selector: 'app-accounts-table',
  standalone: true,
  imports: [AccountTableRowComponent],
  templateUrl: './accounts-table.component.html',
  styleUrl: './accounts-table.component.scss',
})
export class AccountsTableComponent {}
