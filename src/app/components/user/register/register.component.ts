import { Component } from '@angular/core';
import { LabelWithStatesComponent } from '../../../../shared/components/label-with-states/label-with-states.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LabelWithStatesComponent, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerData = {
    email: '',
    password: '',
    repassword: '',
    firstName: '',
    phone: '',
    region: '',
    role: 'organizer',
  };

  onRegisterSubmit() {}
}
