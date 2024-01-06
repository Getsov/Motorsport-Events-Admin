import { Component, Input } from '@angular/core';
import { Event } from '../../../interfaces/Event';
import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent {
  @Input() event: Event = {
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
