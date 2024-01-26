import { Component } from '@angular/core';
import Categories from '../../data/categories';
import BulgarianRegions from '../../data/regions';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [NgFor, FormsModule, IonSelect, IonSelectOption],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss',
})
export class SelectorComponent {
  searchQuery: [] = [];
  regionQuery: [] = [];
  selectedCategory: number[] = [];
  regions: any = Object.keys(BulgarianRegions).filter((value) =>
    isNaN(Number(value))
  );
  selectedRegion: string = '';

  categories: any = Object.keys(Categories).filter((value) =>
    isNaN(Number(value))
  );

  onRegionChange(region: string) {
    this.selectedRegion = region;
    console.log(this.selectedRegion);
  }
}
