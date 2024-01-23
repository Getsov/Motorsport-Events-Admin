import { Component } from '@angular/core';
import Categories from '../../data/categories';
import BulgarianRegions from '../../data/regions';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-section-sort',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './section-sort.component.html',
  styleUrl: './section-sort.component.scss',
})
export class SectionSortComponent {
  searchQuery: [] = [];
  regionQuery: [] = [];
  selectedCategory: number[] = [];
  regions: any = Object.keys(BulgarianRegions).filter((value) =>
    isNaN(Number(value))
  );

  categories: any = Object.keys(Categories).filter((value) =>
    isNaN(Number(value))
  );
}
