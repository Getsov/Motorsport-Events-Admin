import { CommonModule } from '@angular/common';
import { Component, Input, effect } from '@angular/core';
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
export class EventsCardListComponent {
  @Input() eventsList: Event[] = [];
  currentUrl: any;
  isLoading: boolean = true;
  subscription: Subscription | undefined;

  urlOptions = {
    'awaiting-events': {
      setState: () => this.eventService.setEventsForApprove(),
      getState: () => this.eventService.eventsForApproval(),
    },
    test: {
      asdas: ' asdasd',
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
      currentKey.setState();
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
}
