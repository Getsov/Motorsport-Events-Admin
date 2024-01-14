import { Component, effect } from '@angular/core';
import { User } from '../../../../shared/interfaces/User';
import { EventService } from '../../../../shared/services/event.service';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-awaiting-admins',
  standalone: true,
  imports: [],
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
