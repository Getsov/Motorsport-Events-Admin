import { Component, OnDestroy, OnInit, effect } from '@angular/core';
import { User } from '../../../../shared/interfaces/User';
import { UserService } from '../../../../shared/services/user.service';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { AccountsTableComponent } from '../../../../shared/components/accounts-table/accounts-table.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-awaiting-admins',
  standalone: true,
  imports: [LoaderComponent, AccountsTableComponent],
  templateUrl: './awaiting-admins.component.html',
  styleUrl: './awaiting-admins.component.scss',
})
export class AwaitingAdminsComponent implements OnDestroy {
  awaitingApprovalAdmins: User[] = [];
  isLoading: boolean = true;
  subscription: Subscription | undefined;

  constructor(private userService: UserService) {
    this.subscription = this.userService.setAdminsForApprove();
    effect(() => {
      this.awaitingApprovalAdmins = this.userService.adminsForApproval();
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
