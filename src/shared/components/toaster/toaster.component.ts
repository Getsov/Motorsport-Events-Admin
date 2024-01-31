import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonIcon, IonToast } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircle } from 'ionicons/icons';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  standalone: true,
  imports: [IonToast, CommonModule, IonIcon],
})
export class ToasterComponent {
  @Input() toasterType: string = '';
  @Input() toasterMessage: string = '';

  constructor() {
    addIcons({ checkmarkCircle }); // you are missing addIcons Import
  }

  setOpen() {
    this.toasterMessage = '';
  }
}
