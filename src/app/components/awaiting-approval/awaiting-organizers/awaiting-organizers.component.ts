import { Component, effect } from '@angular/core';
import { UserService } from '../../../../shared/services/user.service';
import { User } from '../../../../shared/interfaces/User';
import { EventsCardListComponent } from '../../../../shared/components/events-card-list/events-card-list.component';
import { AccountsTableComponent } from '../../../../shared/components/accounts-table/accounts-table.component';

@Component({
  selector: 'app-awaiting-organizers',
  standalone: true,
  imports: [AccountsTableComponent],
  templateUrl: './awaiting-organizers.component.html',
  styleUrl: './awaiting-organizers.component.scss',
})
export class AwaitingOrganizersComponent {
  awaitingApprovalOrganizers: User[] = [];

  constructor(private userService: UserService) {
    effect(() => {
      this.awaitingApprovalOrganizers =
        this.userService.organizersForApproval();
      console.log(this.awaitingApprovalOrganizers);
    });
  }
}
