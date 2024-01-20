import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { User } from '../interfaces/User';
import { getOptions } from '../utils/http-utils';
import { AuthService } from './auth.service';

const { baseUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  accessToken: string = '';

  constructor(private http: HttpClient, private authService: AuthService) {
    this.accessToken = this.authService.accessToken;
  }

  //  API CALLS ----------
  getOrganizersForApproval(): Observable<User[]> {
    // Login from postman and set your access token from enviroment. We dont have login yet.
    const options = getOptions(this.accessToken);

    return this.http.get<User[]>(
      `${baseUrl}/user/getAllOrganizersForApproval`,
      options
    );
  }

  getAdminsForApproval(): Observable<User[]> {
    // Login from postman and set your access token from enviroment. We dont have login yet.
    const options = getOptions(this.accessToken);

    return this.http.get<User[]>(
      `${baseUrl}/user/getAllAdminsForApproval`,
      options
    );
  }

  getUser(accessToken: string, _id: string) {
    const options = getOptions(accessToken);

    return this.http.get<User>(`${baseUrl}/user/getUserById/${_id}`, options);
  }

  // API CALS END-----

  // SIGNALS --------

  // Organizers for approval

  organizersForApproval = signal<User[]>([]);
  hasOrganizersForapproval: boolean = this.organizersForApproval().length < 1;

  adminsForApproval = signal<User[]>([]);
  hasAdminsForapproval: boolean = this.adminsForApproval().length < 1;

  setOrganizersForApprove(): Subscription {
    return this.getOrganizersForApproval().subscribe({
      next: (response) => {
        this.organizersForApproval.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  setAdminsForApprove(): Subscription {
    return this.getAdminsForApproval().subscribe({
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
