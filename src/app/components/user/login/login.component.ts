import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LabelWithStatesComponent } from '../../../../shared/components/label-with-states/label-with-states.component';
import { AuthService } from '../../../../shared/services/auth.service';
import { ToasterComponent } from '../../../../shared/components/toaster/toaster.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    LabelWithStatesComponent,
    ToasterComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  toasterMessage: string = '';
  toasterType: string = '';

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
        if (userDetails.userRole === 'regular') {
          return;
        }

        this.toasterMessage = 'Успешно влязохте във Вашия акаунт!';
        this.toasterType = 'success';

        setTimeout(() => {
          this.router.navigateByUrl('/');
          this.resetToasters();
          this.email = '';
          this.password = '';
        }, 500);

        localStorage.setItem('MotorSportsUser', JSON.stringify(userDetails));
        this.authService.setUser(userDetails.accessToken, userDetails._id);
        this.authService.userDetails = userDetails;
      },
      error: (error) => {
        error.message;
      },
    });
  }

  navigateToRegister() {
    this.router.navigate(['/user/register']);
  }

  resetToasters() {
    this.toasterMessage = '';
    this.toasterType = '';
  }

  navigateToForgotten() {
    this.router.navigate(['/user/forgotten-password']);
  }
}
