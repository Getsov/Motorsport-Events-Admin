import { Component, effect } from '@angular/core';
import { User } from '../../../../shared/interfaces/User';
import { EventService } from '../../../../shared/services/event.service';
import { UserService } from '../../../../shared/services/user.service';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { AccountsTableComponent } from '../../../../shared/components/accounts-table/accounts-table.component';

@Component({
  selector: 'app-awaiting-admins',
  standalone: true,
  imports: [LoaderComponent, AccountsTableComponent],
  templateUrl: './awaiting-admins.component.html',
  styleUrl: './awaiting-admins.component.scss',
})
export class AwaitingAdminsComponent {
  awaitingApprovalAdmins: User[] = [];
  isLoading: boolean = true;

  constructor(private userService: UserService) {
    effect(() => {
      this.awaitingApprovalAdmins = this.userService.adminsForApproval();
      this.isLoading = false;
    });
  }
}
