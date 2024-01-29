import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Categories from '../../data/categories';
import BulgarianRegions from '../../data/regions';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-section-sort',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './section-sort.component.html',
  styleUrl: './section-sort.component.scss',
})
export class SectionSortComponent {
  searchQuery: [] = [];
  regionQuery: [] = [];
  selectedCategory: [] = [];

  route: string = '';

  regions: any = Object.keys(BulgarianRegions).filter((value) =>
    isNaN(Number(value))
  );

  categories: any = Object.keys(Categories).filter((value) =>
    isNaN(Number(value))
  );

  constructor(private eventService: EventService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.route = this.router.url.split('/')[2];
      }
    });
  }

  searchEvents(): void {
    
    const query = this.buildQuery();

    const routeHandlers: { [key: string]: (query: string) => void } = {
      'not-approved': this.eventService.setMyEventsForApproval.bind(this.eventService),
      'upcoming-approved': this.eventService.setMyUpcomingEvents.bind(this.eventService),
      'past-approved': this.eventService.setMyPastEvents.bind(this.eventService),
      'upcoming-events': this.eventService.setUpcomingEvents.bind(this.eventService),
      'past-events': this.eventService.setPastEvents.bind(this.eventService),
      // TODO: Add Deleted Events
    };

    const routeHandler = routeHandlers[this.route];

    if (routeHandler) {
      routeHandler(query);
    }
  }

  private buildQuery(): string {
    let query = '';

    const addQueryParam = (
      paramName: string,
      paramValue: string | string[]
    ): void => {
      if (paramValue.length > 0) {
        if (Array.isArray(paramValue)) {
          paramValue.forEach((el) => {
            query += `${paramName}=${el}&`;
          });
        } else {
          query += `${paramName}=${paramValue}&`;
        }
      }
    };

    addQueryParam('search', this.searchQuery);
    addQueryParam('category', this.selectedCategory);
    addQueryParam('region', this.regionQuery);

    return query.slice(0, -1);
  }
}
