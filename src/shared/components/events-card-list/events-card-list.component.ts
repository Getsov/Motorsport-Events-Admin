import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Event } from '../../interfaces/Event';
import { EventCardComponent } from './event-card/event-card.component';

@Component({
  selector: 'app-events-card-list',
  standalone: true,
  imports: [CommonModule, EventCardComponent],
  templateUrl: './events-card-list.component.html',
  styleUrl: './events-card-list.component.scss',
})
export class EventsCardListComponent {
  @Input() eventsList: Event[] = [];
}
