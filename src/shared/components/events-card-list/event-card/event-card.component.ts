import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Event } from '../../../interfaces/Event';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LikeIconComponent } from '../../like-icon/like-icon.component';
import { EventService } from '../../../services/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterLink, LikeIconComponent, DatePipe],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent implements OnInit, OnDestroy {
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

  startDate: any = '';
  endDate: any = '';

  private subscriptions: Subscription[] = [];

  approveEvent() {
    const updatedStatus = { isApproved: true };
    this.subscriptions.push(
      this.eventService
        .approveDisapproveEvent(this.event._id, updatedStatus)
        .subscribe({
          next: (response) => {
            this.eventService.removeEventFromApprovalList(this.event._id);
          },
          error: (error) => {
            console.log(error.message);
          },
        })
    );
  }

  deleteEvent() {
    const updatedStatus = { isDeleted: true };

    this.subscriptions.push(
      this.eventService.deleteEvent(this.event._id, updatedStatus).subscribe({
        next: (response) => {
          this.eventService.removeEventFromApprovalList(this.event._id);
        },
        error: (error) => {
          console.log(error.message);
        },
      })
    );
  }

  constructor(private eventService: EventService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    const lastIndex = this.event.dates.length - 1;

    this.startDate = this.datePipe.transform(
      this.event.dates[0].date,
      'dd.MM.yyyy'
    );
    this.endDate = this.datePipe.transform(
      this.event.dates[lastIndex].date,
      'dd.MM.yyyy'
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
