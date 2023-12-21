import { Routes } from '@angular/router';
import { EventsComponent } from './components/events/events/events.component';
import { CreateEventComponent } from './components/events/create-event/create-event.component';
import { AccountsComponent } from './components/accounts/accounts/accounts.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AwaitingApprovalComponent } from './components/events/awaiting-approval/awaiting-approval.component';

export const routes: Routes = [
  { path: 'awaiting-approval', component: AwaitingApprovalComponent },
  { path: 'events', component: EventsComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'profile', component: ProfileComponent },
];
