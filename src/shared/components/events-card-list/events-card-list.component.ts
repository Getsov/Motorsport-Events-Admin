import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-card-list.component.html',
  styleUrl: './events-card-list.component.scss',
})
export class EventsCardListComponent {}
