import { Component, effect } from '@angular/core';
import { EventsCardListComponent } from '../../../../shared/components/events-card-list/events-card-list.component';
import { DataTransferService } from '../../../../shared/services/data-transfer.service';

@Component({
  selector: 'app-awaiting-events',
  standalone: true,
  imports: [EventsCardListComponent],
  templateUrl: './awaiting-events.component.html',
  styleUrl: './awaiting-events.component.scss',
})
export class AwaitingEventsComponent {
  constructor(private dataTranfer: DataTransferService) {
    effect(() => {
      console.log(this.dataTranfer.eventsForApproval());
    });
  }
}
