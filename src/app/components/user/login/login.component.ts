import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  constructor(private router: Router, private authService: AuthService) {}

  onLoginSubmit(form: NgForm) {
    if (form.invalid) {
      return Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        const userDetails = {
          accessToken: response.accessToken,
          _id: response._id,
          userRole: response.role,
        };
        // TODO: Add error popup then the popups are ready(regular users cannot login)
        if (userDetails.userRole === 'regular') {
          return;
        }

        localStorage.setItem('MotorSportsUser', JSON.stringify(userDetails));
        this.authService.setUser(userDetails.accessToken, userDetails._id);
        this.authService.userDetails = userDetails;

        this.email = '';
        this.password = '';

        this.router.navigate(['/awaiting-approval']);
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
}
