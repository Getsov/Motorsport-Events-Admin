import { Component, Input } from '@angular/core';
import { Event } from '../../../interfaces/Event';
import { CommonModule, IMAGE_CONFIG } from '@angular/common';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
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
        long: 0,
      },
      region: '',
      address: '',
      phone: '',
      email: '',
    },
    category: '',
    likes: [],
    creator: '',
    isDeleted: false,
    _id: '',
    isApproved: false,
  };
}
