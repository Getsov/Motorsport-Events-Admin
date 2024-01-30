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
  options;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.options = getOptions(this.authService.userDetails.accessToken);
  }

  //  API CALLS ----------
  getOrganizersForApproval(): Observable<User[]> {
    // Login from postman and set your access token from enviroment. We dont have login yet.

    return this.http.get<User[]>(
      `${baseUrl}/user/getAllOrganizersForApproval`,
      this.options
    );
  }

  getAdminsForApproval(): Observable<User[]> {
    // Login from postman and set your access token from enviroment. We dont have login yet.
    return this.http.get<User[]>(
      `${baseUrl}/user/getAllAdminsForApproval`,
      this.options
    );
  }

  getUser(_id: string) {
    return this.http.get<User>(
      `${baseUrl}/user/getUserById/${_id}`,
      this.options
    );
  }

  getAllTypeOfUsers(query: string = '', userType: string): Observable<User[]> {
    if(query) {
      return this.http.get<User[]>(`${baseUrl}/user/${userType}?${query}`,this.options);
    }
    return this.http.get<User[]>(`${baseUrl}/user/${userType}`,this.options);
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

  // All Admins Signal

  allAdmins = signal<User[]>([]);
  hasAllAdmins: boolean = this.allAdmins().length < 1;

  setAllAdmins(query:string = ''): Subscription {
    return this.getAllTypeOfUsers(query, "allAdmins").subscribe({
      next: (response) => {
        this.allAdmins.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // All Admins signal end

  // All Organizers signal

  allOrganizers = signal<User[]>([]);
  hasAllOrganizers: boolean = this.allOrganizers().length < 1;

  setAllOrganizers(query:string = ''): Subscription {
    return this.getAllTypeOfUsers(query, "allOrganizers").subscribe({
      next: (response) => {
        this.allOrganizers.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // All Organizers signal end

  // All Regular Users signal

  allRegularUsers = signal<User[]>([]);
  hasRegularUsers: boolean = this.allRegularUsers().length < 1;

  setRegularUsers(query:string = ''): Subscription {
    return this.getAllTypeOfUsers(query, "allRegularUsers").subscribe({
      next: (response) => {
        this.allRegularUsers.update((state) => response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // All Regular Users signal end

  // SIGNALS END-----
}
