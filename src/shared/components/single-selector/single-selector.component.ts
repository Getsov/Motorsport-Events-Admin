import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import BulgarianRegions from '../../data/regions';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-single-selector',
  templateUrl: './single-selector.component.html',
  standalone: true,
  imports: [NgFor, FormsModule, IonSelect, IonSelectOption, CommonModule],
  styleUrls: ['./single-selector.component.scss'],
})
export class SingleSelectorComponent implements OnInit {
  selectedRegionValue: string | null = null;
  @ViewChild('region') regionControl!: NgModel;
  @Output() regionFormControl = new EventEmitter<NgModel>();
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // Emitting the reference after view initialization
    this.regionFormControl.emit(this.regionControl);
  }

  regions: any = Object.keys(BulgarianRegions).filter((value) =>
    isNaN(Number(value))
  );

  onRegionChange() {
    // Emitting changes when the region changes
    this.regionFormControl.emit(this.regionControl);
  }
}
