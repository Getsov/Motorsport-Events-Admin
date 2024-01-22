import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { getOptions } from '../utils/http-utils';
import { User } from '../interfaces/User';
const { baseUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  userDetails: any = {};

  subscription: Subscription | undefined;

  constructor(private http: HttpClient) {
    const localStorageItem = localStorage.getItem('MotorSportsUser') || '';

    if (localStorageItem) {
      const localStorageData = JSON.parse(localStorageItem);
      this.userDetails = {
        accessToken: localStorageData.accessToken,
        userId: localStorageData._id,
        userRole: localStorageData.userRole,
      };
      this.setUser(this.userDetails.accessToken, this.userDetails.userId);
    }
  }

  login(email: string, password: string): Observable<any> {
    const body = {
      email,
      password,
    };

    return this.http.post(`${baseUrl}/user/login`, body);
  }

  logout(): void {
    localStorage.clear();
    this.userDetails = {};
    this.currentUser.update((state) => undefined);
  }

  // SIGNALS
  currentUser = signal<User | undefined>(undefined);

  setUser(accessToken: string, userId: string) {
    const options = getOptions(accessToken);

    this.subscription = this.http
      .get(`${baseUrl}/user/getUserById/${userId}`, options)
      .subscribe({
        next: (response) => {
          const currentUser = response as User;
          this.currentUser.update((state) => currentUser);
          const updatedData = {
            accessToken,
            userRole: currentUser.role,
            _id: currentUser._id,
          };
          this.userDetails = updatedData;
          localStorage.setItem('MotorSportsUser', JSON.stringify(updatedData));
        },
        error: (error) => {
          console.log(error.message);
          this.userDetails = {};
        },
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
