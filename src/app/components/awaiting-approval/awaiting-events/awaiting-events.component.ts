import { Component, effect } from '@angular/core';
import { EventsCardListComponent } from '../../../../shared/components/events-card-list/events-card-list.component';
import { EventService } from '../../../../shared/services/event.service';
import { Event } from '../../../../shared/interfaces/Event';

@Component({
  selector: 'app-awaiting-events',
  standalone: true,
  imports: [EventsCardListComponent],
  templateUrl: './awaiting-events.component.html',
  styleUrl: './awaiting-events.component.scss',
})
export class AwaitingEventsComponent {
  awaitingApprovalEvents: any = [];

  constructor(private eventService: EventService) {
    effect(() => {
      this.awaitingApprovalEvents = this.eventService.eventsForApproval();
    });
  }
}
