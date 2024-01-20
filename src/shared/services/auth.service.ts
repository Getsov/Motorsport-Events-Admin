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
  accessToken: string = '';
  userId: string = '';
  subscription: Subscription | undefined;

  constructor(private http: HttpClient) {
    const localStorageItem = localStorage.getItem('MotorSportsUser') || '';

    if (localStorageItem) {
      const localStorageData = JSON.parse(localStorageItem);
      this.accessToken = localStorageData.accessToken;
      this.userId = localStorageData._id;
    }
  }

  login(email: string, password: string): Observable<any> {
    const body = {
      email,
      password,
    };

    return this.http.post(`${baseUrl}/user/login`, body);
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
        },
        error: (error) => {
          console.log(error.message);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
