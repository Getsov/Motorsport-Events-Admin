import { Component, effect } from '@angular/core';
import { EventsCardListComponent } from '../../../../shared/components/events-card-list/events-card-list.component';
import { EventService } from '../../../../shared/services/event.service';
import { Event } from '../../../../shared/interfaces/Event';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-awaiting-events',
  standalone: true,
  imports: [EventsCardListComponent, LoaderComponent],
  templateUrl: './awaiting-events.component.html',
  styleUrls: ['./awaiting-events.component.scss'],
})
export class AwaitingEventsComponent {
  awaitingApprovalEvents: Event[] = [];
  isLoading: boolean = true;

  constructor(private eventService: EventService) {
    effect(() => {
      this.awaitingApprovalEvents = this.eventService.eventsForApproval();
      this.isLoading = false;
    });
  }
}
