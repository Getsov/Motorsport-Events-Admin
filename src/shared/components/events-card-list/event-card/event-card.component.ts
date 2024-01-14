import { Component, Input } from '@angular/core';
import { Event } from '../../../interfaces/Event';
import { CommonModule, DatePipe, IMAGE_CONFIG } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LikeIconComponent } from '../../like-icon/like-icon.component';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterLink, LikeIconComponent],
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
    categories: [],
    likes: [],
    creator: { email: '', role: '', isDeleted: false },
    isDeleted: false,
    _id: '',
  };
}
