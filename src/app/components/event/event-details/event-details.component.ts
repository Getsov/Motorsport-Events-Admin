import { Component, OnInit } from '@angular/core';
import { Event } from '../../../../shared/interfaces/Event';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../../shared/services/event.service';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss',
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
    category: '',
    likes: [],
    creator: { email: '', role: '', isDeleted: false },
    isDeleted: false,
    _id: '',
  };

  mapOptions: google.maps.MapOptions = {};
  marker: any = {};

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadEventDetails(params['eventId']);
    });
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
