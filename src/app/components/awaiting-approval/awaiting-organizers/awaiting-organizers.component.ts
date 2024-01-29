import { Component, OnDestroy, OnInit, effect } from '@angular/core';
import { UserService } from '../../../../shared/services/user.service';
import { User } from '../../../../shared/interfaces/User';
import { AccountsTableComponent } from '../../../../shared/components/accounts-table/accounts-table.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-awaiting-organizers',
  standalone: true,
  imports: [AccountsTableComponent, LoaderComponent],
  templateUrl: './awaiting-organizers.component.html',
  styleUrl: './awaiting-organizers.component.scss',
})
export class AwaitingOrganizersComponent implements OnDestroy {
  awaitingApprovalOrganizers: User[] = [];
  isloading: boolean = true;
  subscription: Subscription | undefined;

  constructor(private userService: UserService) {
    this.subscription = this.userService.setOrganizersForApprove();
    effect(() => {
      this.awaitingApprovalOrganizers =
        this.userService.organizersForApproval();
      this.isloading = false;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
