import { Component } from '@angular/core';
import { Event } from '../../../../shared/interfaces/Event';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss',
})
export class EventDetailsComponent {
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
}
