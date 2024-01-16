import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav.component';
import { EventService } from '../../../shared/services/event.service';
import { UserService } from '../../../shared/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-awaiting-approval',
  standalone: true,
  imports: [SectionNavComponent, RouterOutlet],
  templateUrl: './awaiting-approval.component.html',
  styleUrl: './awaiting-approval.component.scss',
})
export class AwaitingApprovalComponent implements OnInit, OnDestroy {
  hasEventsForApproval: boolean = this.eventService.hasEventsForApproval;
  hasOrganizersForApprove: boolean = this.userService.hasOrganizersForapproval;

  // TODO: make the hasData property dynamic
  options = [
    { label: 'Чакащи събития', route: 'awaiting-events', hasData: true },
    {
      label: 'Чакащи организатори',
      route: 'awaiting-organizers',
      hasData: false,
    },
    {
      label: 'Чакащи администратори',
      route: 'awaiting-admins',
      hasData: true,
    },
  ];

  subscriptions: Subscription[] = [];

  constructor(
    private eventService: EventService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.eventService.setEventsForApprove(),
      this.userService.setOrganizersForApprove(),
      this.userService.setAdminsForApprove()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
