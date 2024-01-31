import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonToast } from '@ionic/angular/standalone';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  standalone: true,
  imports: [IonToast, CommonModule],
})
export class ToasterComponent {
  @Input() toasterType: string = '';
  @Input() toasterMessage: string = '';

  constructor() {}

  setOpen() {
    this.toasterMessage = '';
  }

  getIconPath(): string {
    if (this.toasterType === 'success') {
      return '../../../assets/icons/toast-icons/success.svg';
    } else if (this.toasterType === 'error') {
      return '../../../assets/icons/toast-icons/error.svg';
    } else {
      return '';
    }
  }
}
