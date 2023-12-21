import { Routes } from '@angular/router';
import { EventsComponent } from './components/main/events/events.component';
import { CreateEventComponent } from './components/events/create-event/create-event.component';
import { AccountsComponent } from './components/main/accounts/accounts.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AwaitingApprovalComponent } from './components/main/awaiting-approval/awaiting-approval.component';
import { AwaitingEventsComponent } from './components/events/awaiting-events/awaiting-events.component';
import { AwaitingOrganizersComponent } from './components/accounts/awaiting-organizers/awaiting-organizers.component';
import { UpcomingEventsComponent } from './components/events/upcoming-events/upcoming-events.component';
import { PastEventsComponent } from './components/events/past-events/past-events.component';

export const routes: Routes = [
  {
    path: 'awaiting-approval',
    component: AwaitingApprovalComponent,
    children: [
      { path: 'awaiting-events', component: AwaitingEventsComponent },
      { path: 'awaiting-organizers', component: AwaitingOrganizersComponent },
    ],
  },
  {
    path: 'events',
    component: EventsComponent,
    children: [
      { path: 'upcoming-events', component: UpcomingEventsComponent },
      { path: 'past-events', component: PastEventsComponent },
    ],
  },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'profile', component: ProfileComponent },
];
