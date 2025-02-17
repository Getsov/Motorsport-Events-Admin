import {
  Component,
  OnDestroy,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventCardComponent } from '../../../shared/components/event-card/event-card.component';
import { EventService } from '../../../shared/services/event.service';
import { Subscription } from 'rxjs';
import { Event } from '../../../shared/interfaces/Event';
import { NgOptimizedImage } from '@angular/common';
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
register();

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [RouterLink, EventCardComponent, NgOptimizedImage],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  Subscriptions$: Subscription[] = [];
  upcomingEvents: Event[] = [];
  pageToLoad: number = 1;
  loadEventsCount: number = 10;
  isAllEventsLoaded: boolean = false;

  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 16,
    grabCursor: true,
    centeredSlides: false,
    initialSlide: 0,
    slideToClickedSlide: false,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    loop: false,
  };

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.fetchEvents();
  }

  onSwiperInit(swiper: any) {
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
            this.upcomingEvents = response.results;
            this.pageToLoad++;
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
