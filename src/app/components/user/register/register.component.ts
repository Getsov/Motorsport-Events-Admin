import { Component, OnDestroy } from '@angular/core';
import { LabelWithStatesComponent } from '../../../../shared/components/label-with-states/label-with-states.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { SelectorComponent } from '../../../../shared/components/selector/selector.component';
import { AuthService } from '../../../../shared/services/auth.service';
import { Subscription } from 'rxjs';
import BulgarianRegions from '../../../../shared/data/regions';
import { Router, RouterLink } from '@angular/router';
import { ToasterComponent } from '../../../../shared/components/toaster/toaster.component';
import { sucessMessages } from '../../../../shared/utils/constants';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    LabelWithStatesComponent,
    CommonModule,
    FormsModule,
    SelectorComponent,
    RouterLink,
    ToasterComponent,
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

  toasterMessage: string = '';
  toasterType: string = '';

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
        this.toasterMessage = sucessMessages.organizerRegistration;
        this.toasterType = 'success';

        setTimeout(() => {
          this.resetToasters();
          this.clearData();
        }, 500);
      },
      error: (error) => {
        this.toasterMessage = error.error.error;
        this.toasterType = 'error';

        setTimeout(() => {
          this.resetToasters();
        }, 5000);
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

  resetToasters() {
    this.toasterMessage = '';
    this.toasterType = '';
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
