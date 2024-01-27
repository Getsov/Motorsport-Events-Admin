import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import BulgarianRegions from '../../data/regions';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-single-selector',
  templateUrl: './single-selector.component.html',
  standalone: true,
  imports: [NgFor, FormsModule, IonSelect, IonSelectOption, CommonModule],
  styleUrls: ['./single-selector.component.scss'],
})
export class SingleSelectorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  regions: any = Object.keys(BulgarianRegions).filter((value) =>
    isNaN(Number(value))
  );
  @Output() selectedRegion = new EventEmitter<string>();

  onRegionChange(region: string) {
    this.selectedRegion.emit(region);
  }
}
