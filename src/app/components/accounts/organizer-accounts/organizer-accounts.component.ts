import { Component, OnDestroy, effect } from '@angular/core';
import { SectionSortComponent } from '../../../../shared/components/section-sort/section-sort.component';
import { Subscription } from 'rxjs';
import { User } from '../../../../shared/interfaces/User';
import { UserService } from '../../../../shared/services/user.service';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { AccountsTableComponent } from '../../../../shared/components/accounts-table/accounts-table.component';

@Component({
  selector: 'app-organizer-accounts',
  standalone: true,
  templateUrl: './organizer-accounts.component.html',
  styleUrl: './organizer-accounts.component.scss',
  imports: [SectionSortComponent, LoaderComponent, AccountsTableComponent],
})
export class OrganizerAccountsComponent implements OnDestroy {
  allOrganizers: User[] = [];
  isLoading: boolean = true;
  subscription: Subscription | undefined;

  constructor(private userService: UserService) {
    this.subscription = this.userService.setAllOrganizers();
    effect(() => {
      this.allOrganizers = this.userService.allOrganizers();
      this.isLoading = false;
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
