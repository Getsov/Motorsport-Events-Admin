import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { User } from '../interfaces/User';

const { baseUrl, accessToken } = environment;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  //  API CALLS ----------
  getOrganizersForApproval(): Observable<User[]> {
    // Login from postman and set your access token from enviroment. We dont have login yet.
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': accessToken,
    });

    const options = { headers: headers };

    return this.http.get<User[]>(
      `${baseUrl}/user/getAllOrganizersForApproval`,
      options
    );
  }

  getAdminsForApproval(): Observable<User[]> {
    // Login from postman and set your access token from enviroment. We dont have login yet.
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': accessToken,
    });

    const options = { headers: headers };

    return this.http.get<User[]>(
      `${baseUrl}/user/getAllAdminsForApproval`,
      options
    );
  }

  // API CALS END-----

  // SIGNALS --------

  // Organizers for approval

  organizersForApproval = signal<User[]>([]);
  hasOrganizersForapproval: boolean = this.organizersForApproval().length < 1;

  adminsForApproval = signal<User[]>([]);
  hasAdminsForapproval: boolean = this.adminsForApproval().length < 1;

  setOrganizersForApprove() {
    this.getOrganizersForApproval().subscribe({
      next: (response) => {
        this.organizersForApproval.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  setAdminsForApprove() {
    this.getAdminsForApproval().subscribe({
      next: (response) => {
        this.adminsForApproval.update((state) => response);
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }
  // SIGNALS END-----
}
