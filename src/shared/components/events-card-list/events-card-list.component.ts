import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, effect } from '@angular/core';
import { Event } from '../../interfaces/Event';
import { EventCardComponent } from './event-card/event-card.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventService } from '../../services/event.service';
import { ToasterComponent } from '../toaster/toaster.component';
import { errorMessages } from '../../utils/constants';

@Component({
  selector: 'app-events-card-list',
  standalone: true,
  imports: [CommonModule, EventCardComponent, ToasterComponent],
  templateUrl: './events-card-list.component.html',
  styleUrl: './events-card-list.component.scss',
})
export class EventsCardListComponent implements OnDestroy {
  @Input() eventsList: any[] = [];
  currentUrl: any;
  isLoading: boolean = true;
  subscription: Subscription | undefined;
  toasterMessage: string = '';
  toasterType: string = '';

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
      setState: () => this.eventService.setDeletedEvents(),
      getState: () => this.eventService.deletedEvents(),
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
      this.toasterMessage = errorMessages.notImplementedUrlFunc;
      this.toasterType = 'error';

      setTimeout(() => {
        this.resetToasters();
      }, 5000);
    }
  }

  private getUrl() {
    this.route.url.subscribe((urlSegments) => {
      this.currentUrl = urlSegments.join('/');
    });
  }

  private resetToasters() {
    this.toasterMessage = '';
    this.toasterType = '';
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
