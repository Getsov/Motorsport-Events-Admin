import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Event } from '../../../interfaces/Event';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LikeIconComponent } from '../../like-icon/like-icon.component';
import { EventService } from '../../../services/event.service';
import { Subscription } from 'rxjs';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { ToasterComponent } from '../../toaster/toaster.component';
import { sucessMessages } from '../../../utils/constants';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LikeIconComponent,
    DatePipe,
    ConfirmDialogComponent,
    ToasterComponent,
  ],
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
  private subscriptions: Subscription[] = [];

  showConfirmationDialog: boolean = false;
  confirmationMessage: string = '';
  action: string = '';

  startDate: any = '';
  endDate: any = '';
  toasterMessage: string = '';
  toasterType: string = '';

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

  onConfirmation(confirmed: boolean) {
    if (confirmed) {
      if (this.action === 'approve') {
        this.approveEvent();
      } else if (this.action === 'delete') {
        this.deleteEvent();
      }
    }

    this.showConfirmationDialog = false;
    this.confirmationMessage = '';
  }

  approveEvent() {
    const updatedStatus = { isApproved: true };
    this.subscriptions.push(
      this.eventService
        .approveDisapproveEvent(this.event._id, updatedStatus)
        .subscribe({
          next: (response) => {
            this.toasterMessage = sucessMessages.approveEvent;
            this.toasterType = 'success';
            setTimeout(() => {
              this.eventService.removeEventFromApprovalList(this.event._id);
              this.resetToasters();
            }, 100);
          },
          error: (error) => {
            this.toasterMessage = error.error.error;
            this.toasterType = 'error';
            setTimeout(() => {
              this.resetToasters();
            }, 5000);
          },
        })
    );
  }

  deleteEvent() {
    const updatedStatus = { isDeleted: true };

    this.subscriptions.push(
      this.eventService.deleteEvent(this.event._id, updatedStatus).subscribe({
        next: (response) => {
          setTimeout(() => {
            this.eventService.removeEventFromApprovalList(this.event._id);
            this.resetToasters();
          }, 100);
          this.toasterMessage = sucessMessages.deleteEvent;
          this.toasterType = 'success';
        },
        error: (error) => {
          this.toasterMessage = error.error.error;
          this.toasterType = 'error';
          setTimeout(() => {
            this.resetToasters();
          }, 5000);
        },
      })
    );
  }

  resetToasters() {
    this.toasterMessage = '';
    this.toasterType = '';
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
