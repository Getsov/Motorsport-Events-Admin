import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { Observable } from 'rxjs';
import { Event } from '../interfaces/Event';
import { getOptions } from '../utils/http-utils';

const { baseUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  // API CALLS------

  getEventsForApproval(): Observable<Event[]> {
    // Login from postman and set your access token from enviroment. We dont have login yet.
    const options = getOptions();

    return this.http.get<Event[]>(
      `${baseUrl}/events/eventsForApproval`,
      options
    );
  }

  getEventDetails(eventId: string): Observable<Event> {
    const options = getOptions();

    return this.http.get<Event>(`${baseUrl}/events/${eventId}`, options);
  }

  approveDisapproveEvent(
    eventId: string,
    updatedStatus: Object
  ): Observable<object> {
    const options = getOptions();

    return this.http.put(
      `${baseUrl}/events/approveDisapproveEvent/${eventId}`,
      updatedStatus,
      options
    );
  }

  deleteEvent(eventId: string, updatedStatus: Object): Observable<object> {
    const options = getOptions();

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

  setEventsForApprove() {
    this.getEventsForApproval().subscribe({
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
