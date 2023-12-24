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
      `${baseUrl}/user/organizersForApproval`,
      options
    );
  }

  // API CALS END-----

  // SIGNALS --------

  // Organizers for approval
  organizersForApproval = signal<User[]>([]);

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

  hasOrganizersForapproval: boolean = this.organizersForApproval().length < 1;

  // SIGNALS END-----
}
