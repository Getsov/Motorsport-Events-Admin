import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav.component';
import { User } from '../../../shared/interfaces/User';
import { EventService } from '../../../shared/services/event.service';
import { UserService } from '../../../shared/services/user.service';
import { DataTransferService } from '../../../shared/services/data-transfer.service';

@Component({
  selector: 'app-awaiting-approval',
  standalone: true,
  imports: [SectionNavComponent, RouterOutlet],
  templateUrl: './awaiting-approval.component.html',
  styleUrl: './awaiting-approval.component.scss',
})
export class AwaitingApprovalComponent {
  constructor(
    private eventService: EventService,
    private userService: UserService,
    private transfer: DataTransferService
  ) {}

  organizersForApprove: User[] = [];
  eventsForApprove: Event[] = [];

  ngOnInit() {
    this.loadEventsForApproval();
    this.loadOrganizersForApproval();
  }

  options = [
    { label: 'Чакащи събития', route: 'awaiting-events' },
    { label: 'Чакащи организатори', route: 'awaiting-organizers' },
  ];

  private loadEventsForApproval() {
    this.eventService.getEventsForApproval().subscribe({
      next: (response) => {
        this.eventsForApprove = response;
        this.transfer.setEventsForApprove(this.eventsForApprove);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  private loadOrganizersForApproval() {
    this.userService.getOrganizersForApproval().subscribe({
      next: (response) => {
        this.organizersForApprove = response;
        this.transfer.setOrganizersForApprove(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
