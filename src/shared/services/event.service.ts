import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { Observable } from 'rxjs';

const { baseUrl, accessToken } = environment;

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  // API CALLS------

  getEventsForApproval(): Observable<Event[]> {
    // Login from postman and set your access token from enviroment. We dont have login yet.
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': accessToken,
    });

    const options = { headers: headers };

    return this.http.get<Event[]>(
      `${baseUrl}/events/eventsForApproval`,
      options
    );
  }
  // API CALLS END--------

  // SIGNALS-----

  // Events for approval signal
  eventsForApproval = signal<Event[]>([]);

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

  hasEventsForApproval: boolean = this.eventsForApproval().length < 1;
  // Events for approval signal end.

  // SIGNALS END--------
}
