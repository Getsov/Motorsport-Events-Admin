import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav.component';
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
    private eventService: EventService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.eventService.setEventsForApprove();
    this.userService.setOrganizersForApprove();
  }

  hasEventsForApproval: boolean = this.eventService.hasEventsForApproval;
  hasOrganizersForApprove: boolean = this.userService.hasOrganizersForapproval;

  options = [
    { label: 'Чакащи събития', route: 'awaiting-events' },
    { label: 'Чакащи организатори', route: 'awaiting-organizers' },
  ];
}
