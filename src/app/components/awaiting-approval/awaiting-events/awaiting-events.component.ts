import { Component, OnDestroy, OnInit, effect } from '@angular/core';
import { EventsCardListComponent } from '../../../../shared/components/events-card-list/events-card-list.component';
import { EventService } from '../../../../shared/services/event.service';
import { Event } from '../../../../shared/interfaces/Event';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-awaiting-events',
  standalone: true,
  imports: [EventsCardListComponent, LoaderComponent],
  templateUrl: './awaiting-events.component.html',
  styleUrls: ['./awaiting-events.component.scss'],
})
export class AwaitingEventsComponent implements OnDestroy {
  awaitingApprovalEvents: Event[] = [];
  isLoading: boolean = true;
  subscription: Subscription | undefined;

  constructor(private eventService: EventService) {
    this.subscription = this.eventService.setEventsForApprove();
    effect(() => {
      this.awaitingApprovalEvents = this.eventService.eventsForApproval();
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
