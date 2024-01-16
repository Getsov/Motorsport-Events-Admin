import { Component, Input, OnDestroy } from '@angular/core';
import { Event } from '../../../interfaces/Event';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LikeIconComponent } from '../../like-icon/like-icon.component';
import { EventService } from '../../../services/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterLink, LikeIconComponent],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent implements OnDestroy {
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
    isApproved: false,
    _id: '',
  };

  private eventApprovalSubscription: Subscription | undefined;
  private eventDeletionSubscription: Subscription | undefined;

  approveEvent() {
    const updatedStatus = { isApproved: true };
    this.eventApprovalSubscription = this.eventService
      .approveDisapproveEvent(this.event._id, updatedStatus)
      .subscribe({
        next: (response) => {
          this.eventService.eventsForApproval.update((state) =>
            state.filter((event) => event._id !== this.event._id)
          );
        },
        error: (error) => {
          console.log(error.message);
        },
      });
  }

  deleteEvent() {
    const updatedStatus = { isDeleted: true };

    this.eventDeletionSubscription = this.eventService
      .deleteEvent(this.event._id, updatedStatus)
      .subscribe({
        next: (response) => {
          this.eventService.eventsForApproval.update((state) =>
            state.filter((event) => event._id !== this.event._id)
          );
        },
        error: (error) => {
          console.log(error.message);
        },
      });
  }

  constructor(private eventService: EventService) {}

  ngOnDestroy(): void {
    if (this.eventApprovalSubscription) {
      this.eventApprovalSubscription.unsubscribe();
    }
    if (this.eventDeletionSubscription) {
      this.eventDeletionSubscription.unsubscribe();
    }
  }
}
