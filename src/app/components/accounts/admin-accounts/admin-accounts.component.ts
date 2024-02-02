import { Component, OnDestroy, effect } from '@angular/core';
import { SectionSortComponent } from '../../../../shared/components/section-sort/section-sort.component';
import { User } from '../../../../shared/interfaces/User';
import { Subscription } from 'rxjs';
import { UserService } from '../../../../shared/services/user.service';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { AccountsTableComponent } from '../../../../shared/components/accounts-table/accounts-table.component';

@Component({
  selector: 'app-admin-accounts',
  standalone: true,
  templateUrl: './admin-accounts.component.html',
  styleUrl: './admin-accounts.component.scss',
  imports: [SectionSortComponent, LoaderComponent, AccountsTableComponent],
})
export class AdminAccountsComponent implements OnDestroy {
  allAdmins: User[] = [];
  isLoading: boolean = true;
  subscription: Subscription | undefined;

  constructor(private userService: UserService) {
    this.subscription = this.userService.setAllAdmins();
    effect(() => {
      this.allAdmins = this.userService.allAdmins();
      this.isLoading = false;
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
