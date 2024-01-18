import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  onLoginSubmit(form: NgForm) {
    console.log('submit');
    this.router.navigate(['/']);
  }

  constructor(private router: Router) {}
}
