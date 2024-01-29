import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  standalone: true,
  imports: [NgFor, FormsModule, IonSelect, IonSelectOption, CommonModule],
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent {
  selectedRegionValue: string | null = null;
  @ViewChild('region') regionControl!: NgModel;
  @Output() regionFormControl = new EventEmitter<NgModel>();
  @Input() isMultiple: boolean = false;
  @Input() list: [] = [];
  @Input() labelText: string = '';

  ngAfterViewInit() {
    // Emitting the reference after view initialization
    this.regionFormControl.emit(this.regionControl);
  }

  onRegionChange() {
    // Emitting changes when the region changes
    this.regionFormControl.emit(this.regionControl);
  }
}
