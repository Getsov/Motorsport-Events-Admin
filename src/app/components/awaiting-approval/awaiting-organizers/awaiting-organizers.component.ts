import { Component, effect } from '@angular/core';
import { DataTransferService } from '../../../../shared/services/data-transfer.service';

@Component({
  selector: 'app-awaiting-organizers',
  standalone: true,
  imports: [],
  templateUrl: './awaiting-organizers.component.html',
  styleUrl: './awaiting-organizers.component.scss',
})
export class AwaitingOrganizersComponent {
  constructor(private dataTranfer: DataTransferService) {
    effect(() => {
      console.log(this.dataTranfer.organizersForApproval());
    });
  }
}
