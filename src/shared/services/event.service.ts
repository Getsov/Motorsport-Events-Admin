import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { Observable } from 'rxjs';

const { baseUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEventsForApproval(): Observable<Event[]> {
    // Login from postman and set your access token here. We dont have login yet.
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg1NWQzMmVjOGRjNWUzZjJjZGQxYWEiLCJlbWFpbCI6IkRpbW9AYWJ2LmJnIiwib3JnYW5pemF0b3JOYW1lIjoiQmFpIEl2YW4iLCJmaXJzdE5hbWUiOiJQZXNobyIsImxhc3ROYW1lIjoiUGVzaG92Iiwicm9sZSI6ImFkbWluIiwicmVnaW9uIjoiIiwicGhvbmUiOiIwODk3MzM1NTg3IiwiaXNEZWxldGVkIjpmYWxzZSwiaXNBcHByb3ZlZCI6dHJ1ZSwiaWF0IjoxNzAzMjYwMjA2LCJleHAiOjE3MDQxMjQyMDZ9.etRonUqUYaiNoQvRg9sxfG7te55ej_8t21cHDWXNmhM',
    });

    const options = { headers: headers };

    return this.http.get<Event[]>(
      `${baseUrl}/events/eventsForApproval`,
      options
    );
  }
}
