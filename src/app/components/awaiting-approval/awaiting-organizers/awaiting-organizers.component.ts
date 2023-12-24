import { Component, effect } from '@angular/core';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-awaiting-organizers',
  standalone: true,
  imports: [],
  templateUrl: './awaiting-organizers.component.html',
  styleUrl: './awaiting-organizers.component.scss',
})
export class AwaitingOrganizersComponent {
  constructor(private userService: UserService) {
    effect(() => {
      console.log(this.userService.organizersForApproval());
    });
  }
}
