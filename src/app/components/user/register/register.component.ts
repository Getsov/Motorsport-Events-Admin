import { Component, OnDestroy } from '@angular/core';
import { LabelWithStatesComponent } from '../../../../shared/components/label-with-states/label-with-states.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { SingleSelectorComponent } from '../../../../shared/components/single-selector/single-selector.component';
import { AuthService } from '../../../../shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    LabelWithStatesComponent,
    CommonModule,
    FormsModule,
    SingleSelectorComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnDestroy {
  emptyRegisterData = {
    email: '',
    password: '',
    repassword: '',
    organizatorName: '',
    phone: '',
    region: '',
    role: 'organizer',
  };

  registerData = { ...this.emptyRegisterData };

  subscription: Subscription | undefined;

  constructor(private authService: AuthService) {}

  onRegionSelect(region: any) {
    this.registerData.region = region;
  }

  onRegisterSubmit(form: NgForm) {
    if (form.invalid) {
      return Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.subscription = this.authService.register(this.registerData).subscribe({
      next: (response) => {
        // success toaster

        this.registerData = { ...this.emptyRegisterData };
      },
      error: (error) => {
        console.log(error.error);
      },
    });
  }

  clearData() {
    return (this.registerData = { ...this.emptyRegisterData });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
