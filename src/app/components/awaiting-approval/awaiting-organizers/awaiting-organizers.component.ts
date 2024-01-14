import { Component, effect } from '@angular/core';
import { UserService } from '../../../../shared/services/user.service';
import { User } from '../../../../shared/interfaces/User';
import { AccountsTableComponent } from '../../../../shared/components/accounts-table/accounts-table.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-awaiting-organizers',
  standalone: true,
  imports: [AccountsTableComponent, LoaderComponent],
  templateUrl: './awaiting-organizers.component.html',
  styleUrl: './awaiting-organizers.component.scss',
})
export class AwaitingOrganizersComponent {
  awaitingApprovalOrganizers: User[] = [];
  isloading: boolean = true;

  constructor(private userService: UserService) {
    effect(() => {
      this.awaitingApprovalOrganizers =
        this.userService.organizersForApproval();
      this.isloading = false;
    });
  }
}
