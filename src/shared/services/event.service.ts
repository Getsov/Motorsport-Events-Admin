import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { Observable, Subscription } from 'rxjs';
import { Event } from '../interfaces/Event';
import { getOptions } from '../utils/http-utils';
import { AuthService } from './auth.service';

const { baseUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class EventService {
  accessToken: string = '';
  constructor(private http: HttpClient, private authService: AuthService) {
    this.accessToken = this.authService.userDetails.accessToken;
  }

  // API CALLS------

  getEventsForApproval(): Observable<Event[]> {
    const options = getOptions(this.accessToken);

    return this.http.get<Event[]>(
      `${baseUrl}/events/eventsForApproval`,
      options
    );
  }

  getEventDetails(eventId: string): Observable<Event> {
    const options = getOptions(this.accessToken);

    return this.http.get<Event>(`${baseUrl}/events/${eventId}`, options);
  }

  approveDisapproveEvent(
    eventId: string,
    updatedStatus: Object
  ): Observable<object> {
    const options = getOptions(this.accessToken);

    return this.http.put(
      `${baseUrl}/events/approveDisapproveEvent/${eventId}`,
      updatedStatus,
      options
    );
  }

  deleteEvent(eventId: string, updatedStatus: Object): Observable<object> {
    const options = getOptions(this.accessToken);

    return this.http.put(
      `${baseUrl}/events/deleteRestoreEvent/${eventId} `,
      updatedStatus,
      options
    );
  }
  // API CALLS END--------

  // SIGNALS-----

  // Events for approval signal

  eventsForApproval = signal<Event[]>([]);

  hasEventsForApproval: boolean = this.eventsForApproval().length > 1;

  setEventsForApprove(): Subscription {
    return this.getEventsForApproval().subscribe({
      next: (response) => {
        this.eventsForApproval.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  removeEventFromApprovalList(eventId: string) {
    this.eventsForApproval.update((state) =>
      state.filter((event) => event._id !== eventId)
    );
  }

  // Events for approval signal end.

  // SIGNALS END--------
}
