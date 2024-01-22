import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SectionSortComponent } from '../../../../shared/components/section-sort/section-sort.component';
import { AuthService } from '../../../../shared/services/auth.service';
import { EventService } from '../../../../shared/services/event.service';
import { Event } from '../../../../shared/interfaces/Event';
import { LoaderComponent } from "../../../../shared/components/loader/loader.component";
import { EventsCardListComponent } from "../../../../shared/components/events-card-list/events-card-list.component";

@Component({
    selector: 'app-not-approved',
    standalone: true,
    templateUrl: './not-approved.component.html',
    styleUrl: './not-approved.component.scss',
    imports: [SectionSortComponent, LoaderComponent, EventsCardListComponent]
})
export class NotApprovedComponent implements OnInit, OnDestroy {
  eventsData: Event[] = [];
  query: any = [];
  isLoading: boolean = true;

  private eventsSubscription: Subscription = new Subscription();

  constructor(
    private eventService: EventService,
    private authService: AuthService
  ) {}

    ngOnInit(): void {
        this.getEvents();
    }


  getEvents(): void {
    this.eventsSubscription = this.eventService.getEventsForApproval().subscribe({
      next: (events: Event[]) => {
        this.isLoading = false;
        this.eventsData = events;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.eventsSubscription) {
        this.eventsSubscription.unsubscribe();
      }
  }
}
