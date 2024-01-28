import { Component } from '@angular/core';
import Categories from '../../data/categories';
import BulgarianRegions from '../../data/regions';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-section-sort',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './section-sort.component.html',
  styleUrl: './section-sort.component.scss',
})
export class SectionSortComponent{
  searchQuery: [] = [];
  regionQuery: [] = [];
  selectedCategory: number[] = [];

  route: string | undefined;
  regions: any = Object.keys(BulgarianRegions).filter((value) =>
    isNaN(Number(value))
  );

  categories: any = Object.keys(Categories).filter((value) =>
    isNaN(Number(value))
  );

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.route = this.router.url.split('/')[2];
        }
      });
    }

    searchEvents(): void {
      let query = '';
  
      if (this.searchQuery.length > 0) {
        query += `search=${this.searchQuery}&`;
      }
  
      if (this.selectedCategory.length > 0) {
        if (this.selectedCategory.length > 1) {
          this.selectedCategory.forEach((el) => {
            query += `category=${el}&`;
          });
        } else {
          query += `category=${this.selectedCategory}&`;
        }
      } 
  
      if (this.regionQuery.length > 0) {
        if (this.regionQuery.length > 1) {
          this.regionQuery.forEach((el: string) => {
            query += `region=${el}&`;
          });
        } else {
          query += `region=${this.regionQuery}&`;
        }
      }
  
      query = query.slice(0, -1);
      
      if(this.route == 'not-approved'){
        this.eventService.setMyEventsForApproval(query);
      }else if(this.route == 'upcoming-approved'){
        this.eventService.setMyUpcomingEvents(query);
      }else if(this.route == 'past-approved'){
        this.eventService.setMyPastEvents(query);
      }else if(this.route == 'upcoming-events'){
        this.eventService.setUpcomingEvents(query);
      }else if(this.route == 'past-events'){
        this.eventService.setPastEvents(query);
      }/* TODO: Deleted Events */
      
    }

}
