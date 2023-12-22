import { Component } from '@angular/core';
import { EventsCardListComponent } from '../../../../shared/components/events-card-list/events-card-list.component';

@Component({
  selector: 'app-awaiting-events',
  standalone: true,
  imports: [EventsCardListComponent],
  templateUrl: './awaiting-events.component.html',
  styleUrl: './awaiting-events.component.scss',
})
export class AwaitingEventsComponent {}
