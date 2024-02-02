import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventCardComponent } from '../../../shared/components/event-card/event-card.component';
import { EventService } from '../../../shared/services/event.service';
import { Subscription } from 'rxjs';
import { Event } from '../../../shared/interfaces/Event';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [RouterLink, EventCardComponent],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  Subscriptions$: Subscription[] = [];

  upcomingEvents: Event[] = [];
  pageToLoad: number = 1;
  loadEventsCount: number = 5;

  isAllEventsLoaded: boolean = false;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.fetchEvents();
  }

  swiperSlideChanged(e: any) {
    // Add a flag to track whether all events have been loaded
    // Load more events 2 dots before the end.
    if (!this.isAllEventsLoaded) {
      this.fetchEvents();
    }
  }

  fetchEvents() {
    this.Subscriptions$.push(
      this.eventService
        .getPaginationEvents(this.pageToLoad, this.loadEventsCount)
        .subscribe({
          next: (response) => {
            if (!response.nextPage) {
              this.upcomingEvents.push(...response.results);
              this.pageToLoad++;
            } else {
              this.isAllEventsLoaded = true;
            }
          },
          error: (error) => {
            console.log(error);
          },
        })
    );
  }

  ngOnDestroy(): void {
    for (const subscription$ of this.Subscriptions$) {
      subscription$.unsubscribe();
    }
  }
}
