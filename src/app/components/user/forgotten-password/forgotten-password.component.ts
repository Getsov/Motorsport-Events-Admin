import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LabelWithStatesComponent } from '../../../../shared/components/label-with-states/label-with-states.component';
import { UserService } from '../../../../shared/services/user.service';
import { Router } from '@angular/router';
import { LoaderComponent } from "../../../../shared/components/loader/loader.component";

@Component({
    selector: 'app-forgotten-password',
    standalone: true,
    templateUrl: './forgotten-password.component.html',
    styleUrl: './forgotten-password.component.scss',
    imports: [FormsModule, LabelWithStatesComponent, LoaderComponent]
})
export class ForgottenPasswordComponent {
  email: string = '';
  isLoading: boolean = false;
  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm) {
    this.isLoading = true;
    if (form.invalid) {
      this.isLoading = false;
      return Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.userService.resetUserPassword(this.email).subscribe({
      next: (data) => {
        this.email = '';
        this.isLoading = false;
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }

  onCancel() {
    this.router.navigate(['/']);
  }
  
}
