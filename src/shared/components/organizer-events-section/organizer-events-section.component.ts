import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { EventService } from '../../services/event.service';
import { SectionSortComponent } from '../../../shared/components/section-sort/section-sort.component';
import { Event } from '../../../shared/interfaces/Event';
import { LoaderComponent } from "../../../shared/components/loader/loader.component";
import { EventsCardListComponent } from "../../../shared/components/events-card-list/events-card-list.component";
import { EventCardComponent } from '.././events-card-list/event-card/event-card.component';

@Component({
  selector: 'app-organizer-events-section',
  standalone: true,
  imports: [SectionSortComponent, LoaderComponent, EventsCardListComponent, EventCardComponent],
  templateUrl: './organizer-events-section.component.html',
  styleUrl: './organizer-events-section.component.scss'
})
export class OrganizerEventsSectionComponent implements OnInit, OnDestroy {
  eventsData: Event[] = [];
  query: any = [];
  isLoading: boolean = true;
  route: string | undefined

  subscriptions: Subscription[] = [];

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {}

    ngOnInit(): void {
      this.route = this.activatedRoute.snapshot.routeConfig?.path;
      if(this.route == 'not-approved'){
        this.getNotApproved();
      }else if(this.route == 'upcoming-approved'){
        this.getUpcoming();
      }else if(this.route == 'past-approved'){
        this.getPast();
      }
    }

    getNotApproved(): void {
      this.subscriptions.push(
        this.eventService.getEventsForApproval().subscribe({
        next: (events: Event[]) => {
          this.isLoading = false;
          this.eventsData = events;
        },
        error: (err) => {
          this.isLoading = false;
          console.error(err);
        },
      })
      );
    };

    getUpcoming(): void {
      this.subscriptions.push(
        this.eventService.getUpcomingEvents().subscribe({
        next: (events: Event[]) => {
          this.isLoading = false;
          this.eventsData = events;
        },
        error: (err) => {
          this.isLoading = false;
          console.error(err);
        },
      })
      );
    };

    getPast(): void {
      this.subscriptions.push(
        this.eventService.getPastEvents().subscribe({
        next: (events: Event[]) => {
          this.isLoading = false;
          this.eventsData = events;
        },
        error: (err) => {
          this.isLoading = false;
          console.error(err);
        },
      })
      );
    };
  

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  };
}