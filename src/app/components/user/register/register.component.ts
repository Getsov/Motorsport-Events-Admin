import { Component, OnDestroy } from '@angular/core';
import { LabelWithStatesComponent } from '../../../../shared/components/label-with-states/label-with-states.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { SelectorComponent } from '../../../../shared/components/selector/selector.component';
import { AuthService } from '../../../../shared/services/auth.service';
import { Subscription } from 'rxjs';
import BulgarianRegions from '../../../../shared/data/regions';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    LabelWithStatesComponent,
    CommonModule,
    FormsModule,
    SelectorComponent,
    RouterLink,
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
  regionFormControl: NgModel | undefined;
  regions: any = Object.keys(BulgarianRegions).filter((value) =>
    isNaN(Number(value))
  );

  constructor(private authService: AuthService, private router: Router) {}

  onRegionSelect(regionFormControl: NgModel) {
    this.registerData.region = regionFormControl.value;
    this.regionFormControl = regionFormControl;
  }

  onRegisterSubmit(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });

      return this.regionFormControl!.control.markAsTouched();
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
    this.registerData = { ...this.emptyRegisterData };
    if (this.regionFormControl) {
      this.regionFormControl.reset();
    }
    this.router.navigate(['/user/login']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
