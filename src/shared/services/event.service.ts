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
    if(query) {
    return this.http.get<Event[]>(`${baseUrl}/events/eventsForApproval?${query}`,this.options);
    }
    return this.http.get<Event[]>(`${baseUrl}/events/eventsForApproval`,this.options);
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

  getMyEventsForApproval(query = ''): Observable<Event[]> {
    if(query) {
      return this.http.get<Event[]>(`${baseUrl}/user/myEventsForApproval?${query}`,this.options);
    }
    return this.http.get<Event[]>(`${baseUrl}/user/myEventsForApproval`,this.options);
  }

  getMyUpcomingEvents(query = ''): Observable<Event[]> {
    if(query) {
    return this.http.get<Event[]>(`${baseUrl}/user/myUpcomingEvents?${query}`,this.options);
    }
    return this.http.get<Event[]>(`${baseUrl}/user/myUpcomingEvents`,this.options);
  }

  getMyPastEvents(query = ''): Observable<Event[]> {
    if(query) {
    return this.http.get<Event[]>(`${baseUrl}/user/myPastEvents?${query}`, this.options);
    }
    return this.http.get<Event[]>(`${baseUrl}/user/myPastEvents`, this.options);
  }

  getUpcomingEvents(query = ''): Observable<Event[]> {
    if(query) {
    return this.http.get<Event[]>(`${baseUrl}/events/upcomingEvents?${query}`, this.options);
    }
    return this.http.get<Event[]>(`${baseUrl}/events/upcomingEvents`, this.options);
  }

  getPastEvents(query = ''): Observable<Event[]> {
    if(query) {
    return this.http.get<Event[]>(`${baseUrl}/events/pastEvents?${query}`, this.options);
    }
    return this.http.get<Event[]>(`${baseUrl}/events/pastEvents`, this.options);
  }

  getDeletedEvents(query = ''): Observable<Event[]> {
    if(query) {
    return this.http.get<Event[]>(`${baseUrl}/events/deletedEvents?${query}`, this.options);
    }
    return this.http.get<Event[]>(`${baseUrl}/events/deletedEvents`, this.options);
  }
  
  /* TODO: Deleted Events */

  // API CALLS END--------

  // SIGNALS-----

  // Events for approval signal

  eventsForApproval = signal<Event[]>([]);

  hasEventsForApproval: boolean = this.eventsForApproval().length > 1;

  setEventsForApprove(query = ''): Subscription {
    return this.getEventsForApproval(query).subscribe({
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

  myUpcomingEvents = signal<Event[]>([]);

  hasMyUpcomingEvents: boolean = this.myUpcomingEvents().length > 1;

  setMyUpcomingEvents(query = ''): Subscription {
    return this.getMyUpcomingEvents(query).subscribe({
      next: (response) => {
        this.myUpcomingEvents.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // Upcoming events signal end

  // Past events signal

  myPastEvents = signal<Event[]>([]);

  hasMyPastEvents: boolean = this.myPastEvents().length > 1;

  setMyPastEvents(query = ''): Subscription {
    return this.getMyPastEvents(query).subscribe({
      next: (response) => {
        this.myPastEvents.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // Past events signal end

  // My Events For Approval signal

  myEventsForApproval = signal<Event[]>([]);

  hasMyEventsForApproval: boolean = this.myEventsForApproval().length > 1;

  setMyEventsForApproval(query = ''): Subscription {
    return this.getMyEventsForApproval(query).subscribe({
      next: (response) => {
        this.myEventsForApproval.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // My Events For Approval signal end

  // All Upcoming Events signal

  upcomingEvents = signal<Event[]>([]);

  hasUpcomingEvents: boolean = this.upcomingEvents().length > 1;

  setUpcomingEvents(query = ''): Subscription {
    return this.getUpcomingEvents(query).subscribe({
      next: (response) => {
        this.upcomingEvents.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // All Upcoming Events signal end

  // All Past Events signal

  pastEvents = signal<Event[]>([]);

  hasPastEvents: boolean = this.pastEvents().length > 1;

  setPastEvents(query = ''): Subscription {
    return this.getPastEvents(query).subscribe({
      next: (response) => {
        this.pastEvents.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // All Past Events signal end

  // All Deleted Events Signal

  deletedEvents = signal<Event[]>([]);

  hasDeletedEvents: boolean = this.deletedEvents().length > 1;

  setDeletedEvents(query = ''): Subscription {
    return this.getDeletedEvents(query).subscribe({
      next: (response) => {
        this.deletedEvents.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // All Deleted Events signal end

  // SIGNALS END--------
}
