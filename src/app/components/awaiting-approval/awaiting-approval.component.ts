import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav.component';
import { User } from '../../../shared/interfaces/User';
import { EventService } from '../../../shared/services/event.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-awaiting-approval',
  standalone: true,
  imports: [SectionNavComponent, RouterOutlet],
  templateUrl: './awaiting-approval.component.html',
  styleUrl: './awaiting-approval.component.scss',
})
export class AwaitingApprovalComponent {
  constructor(
    private router: Router,
    private eventService: EventService,
    private userService: UserService
  ) {}

  options = [
    { label: 'Чакащи събития', route: 'awaiting-events' },
    { label: 'Чакащи организатори', route: 'awaiting-organizers' },
  ];

  organizersForApprove: User[] = [];
  eventsForApprove: Event[] = [];

  ngOnInit() {
    this.router.navigate(['/awaiting-approval/awaiting-events']);

    this.eventService.getEventsForApproval().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.userService.getUsersForApproval().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
