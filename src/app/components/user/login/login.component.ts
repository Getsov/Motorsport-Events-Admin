import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LabelWithStatesComponent } from '../../../../shared/components/label-with-states/label-with-states.component';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, LabelWithStatesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLoginSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        const userDetails = {
          accessToken: response.accessToken,
          _id: response._id,
        };
        this.email = '';
        this.password = '';
        localStorage.setItem('MotorSportsUser', JSON.stringify(userDetails));
        this.router.navigate(['/']);
      },
      error: (error) => {
        error.message;
      },
    });
  }

  navigateToRegister() {
    this.router.navigate(['/user/register']);
  }

  navigateToForgotten() {
    this.router.navigate(['/user/forgotten-password']);
  }

  constructor(private router: Router, private authService: AuthService) {}
}
