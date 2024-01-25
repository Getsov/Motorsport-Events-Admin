import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  options;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.options = getOptions(this.authService.userDetails.accessToken);
  }

  // API CALLS------

  getEventsForApproval(query = ''): Observable<Event[]> {
    return this.http.get<Event[]>(
      `${baseUrl}/events/eventsForApproval`,
      this.options
    );
  }

  getEventDetails(eventId: string): Observable<Event> {
    return this.http.get<Event>(`${baseUrl}/events/${eventId}`, this.options);
  }

  approveDisapproveEvent(
    eventId: string,
    updatedStatus: Object
  ): Observable<object> {
    return this.http.put(
      `${baseUrl}/events/approveDisapproveEvent/${eventId}`,
      updatedStatus,
      this.options
    );
  }

  deleteEvent(eventId: string, updatedStatus: Object): Observable<object> {
    return this.http.put(
      `${baseUrl}/events/deleteRestoreEvent/${eventId} `,
      updatedStatus,
      this.options
    );
  }

  getUpcomingEvents(query = ''): Observable<Event[]> {
    return this.http.get<Event[]>(`${baseUrl}/events/upcomingEvents`,this.options);
  }

  getPastEvents(query = ''): Observable<Event[]> {
    return this.http.get<Event[]>(`${baseUrl}/events/pastEvents`, this.options);
  }
  // API CALLS END--------

  // SIGNALS-----

  // Events for approval signal

  eventsForApproval = signal<Event[]>([]);

  hasEventsForApproval: boolean = this.eventsForApproval().length > 1;

  setEventsForApprove(query = ''): Subscription {
    return this.getEventsForApproval(query = '').subscribe({
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

  // Upcoming events signal

  upcomingEvents = signal<Event[]>([]);

  hasUpcomingEvents: boolean = this.upcomingEvents().length > 1;

  setUpcomingEvents(query = ''): Subscription {
    return this.getUpcomingEvents(query = '').subscribe({
      next: (response) => {
        this.upcomingEvents.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // Upcoming events signal end

  // Past events signal

  pastEvents = signal<Event[]>([]);

  hasPastEvents: boolean = this.pastEvents().length > 1;

  setPastEvents(query = ''): Subscription {
    return this.getPastEvents(query = '').subscribe({
      next: (response) => {
        this.pastEvents.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // Past events signal end

  // SIGNALS END--------
}
