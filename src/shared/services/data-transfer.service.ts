import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/User';
import { Event } from '../interfaces/Event';

@Injectable({
  providedIn: 'root',
})
export class DataTransferService {
  organizersForApproval = signal<User[]>([]);
  eventsForApproval = signal<Event[]>([]);

  setOrganizersForApprove(OrganizersForApprovalList: User[]) {
    this.organizersForApproval.update((state) => OrganizersForApprovalList);
  }

  setEventsForApprove(EventsForApproveList: any) {
    this.eventsForApproval.update((state) => EventsForApproveList);
  }
}
