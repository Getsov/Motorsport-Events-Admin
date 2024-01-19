import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  onLoginSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.userService.login(email, password).subscribe({
      next: (response) => {
        const userDetails = {
          accessToken: response.accessToken,
        };

        localStorage.setItem('MotorSportUser', JSON.stringify(userDetails));
      },
      error: (error) => {
        error.message;
      },
    });
    // this.router.navigate(['/']);
  }

  constructor(private router: Router, private userService: UserService) {}
}
