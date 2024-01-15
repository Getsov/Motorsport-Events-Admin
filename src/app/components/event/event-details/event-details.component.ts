import { Component, OnInit } from '@angular/core';
import { Event } from '../../../../shared/interfaces/Event';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../../shared/services/event.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss',
  providers: [DatePipe],
})
export class EventDetailsComponent implements OnInit {
  event: Event = {
    shortTitle: '',
    shortDescription: '',
    longDescription: '',
    visitorPrices: [],
    dates: [],
    imageUrl: '',
    contacts: {
      coordinates: {
        lat: 0,
        lng: 0,
      },
      region: '',
      address: '',
      phone: '',
      email: '',
    },
    categories: [],
    likes: [],
    creator: { email: '', role: '', isDeleted: false },
    isDeleted: false,
    isApproved: false,
    _id: '',
  };

  mapOptions: google.maps.MapOptions = {};
  marker: any = {};
  eventDates = '';
  mapWidth: number = 0;
  mapHeight: number = 0;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    public datePipe: DatePipe,
    private mediaMatcher: MediaMatcher
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadEventDetails(params['eventId']);
    });

    // Check if the screen width is below 600px
    const isSmallScreen =
      this.mediaMatcher.matchMedia('(max-width: 600px)').matches;

    this.mapWidth = isSmallScreen ? 328 : 600;
    this.mapHeight = isSmallScreen ? 200 : 400;
  }

  private loadEventDetails(eventId: string) {
    this.eventService.getEventDetails(eventId).subscribe({
      next: (eventDetails) => {
        this.event = eventDetails;

        let lat = Number(this.event.contacts.coordinates.lat);
        let lng = Number(this.event.contacts.coordinates.lng);

        this.mapOptions = {
          center: {
            lat,
            lng,
          },
          zoom: 14,
        };

        this.marker = {
          position: {
            lat,
            lng,
          },
        };
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }
}
