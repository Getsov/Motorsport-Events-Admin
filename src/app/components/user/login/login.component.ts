import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../shared/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLoginSubmit() {
    console.log(this.email, this.password);

    // this.userService.login(email, password).subscribe({
    //   next: (response) => {
    //     const userDetails = {
    //       accessToken: response.accessToken,
    //     };

    //     localStorage.setItem('MotorSportUser', JSON.stringify(userDetails));
    //   },
    //   error: (error) => {
    //     error.message;
    //   },
    // });
    // // this.router.navigate(['/']);
  }

  constructor(private router: Router, private userService: UserService) {}
}
