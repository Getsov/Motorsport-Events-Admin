import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, effect } from '@angular/core';
import { Event } from '../../interfaces/Event';
import { EventCardComponent } from './event-card/event-card.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events-card-list',
  standalone: true,
  imports: [CommonModule, EventCardComponent],
  templateUrl: './events-card-list.component.html',
  styleUrl: './events-card-list.component.scss',
})
export class EventsCardListComponent implements OnDestroy {
  @Input() eventsList: Event[] = [];
  currentUrl: any;
  isLoading: boolean = true;
  subscription: Subscription | undefined;

  urlOptions = {
    'awaiting-events': {
      setState: () => this.eventService.setEventsForApprove(),
      getState: () => this.eventService.eventsForApproval(),
    },
    'not-approved': {
      setState: () => this.eventService.setMyEventsForApproval(),
      getState: () => this.eventService.myEventsForApproval(),
    },
    'upcoming-approved': {
      setState: () => this.eventService.setMyUpcomingEvents(),
      getState: () => this.eventService.myUpcomingEvents(),
    },
    'past-approved': {
      setState: () => this.eventService.setMyPastEvents(),
      getState: () => this.eventService.myPastEvents(),
    },
    'upcoming-events': {
      setState: () => this.eventService.setUpcomingEvents(),
      getState: () => this.eventService.upcomingEvents(),
    },
    'past-events': {
      setState: () => this.eventService.setPastEvents(),
      getState: () => this.eventService.pastEvents(),
    },
    'deleted-events': {
      setState: () =>
        this.eventService.setUpcomingEvents() /* TODO: Deleted Events */,
      getState: () =>
        this.eventService.upcomingEvents() /* TODO: Deleted Events */,
    },
  };

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {
    this.getUrl();

    const currentKey =
      this.urlOptions[this.currentUrl as keyof typeof this.urlOptions];

    if (currentKey && 'setState' in currentKey && 'getState' in currentKey) {
      this.subscription = currentKey.setState();
      effect(() => {
        this.eventsList = currentKey.getState();
      });
    } else {
      throw new Error('This url did not have implemented functionality');
    }
  }

  private getUrl() {
    this.route.url.subscribe((urlSegments) => {
      this.currentUrl = urlSegments.join('/');
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
