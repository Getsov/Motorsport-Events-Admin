import { Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { CreateEventComponent } from './components/event/create-event/create-event.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AwaitingApprovalComponent } from './components/awaiting-approval/awaiting-approval.component';
import { AwaitingEventsComponent } from './components/awaiting-approval/awaiting-events/awaiting-events.component';
import { AwaitingOrganizersComponent } from './components/awaiting-approval/awaiting-organizers/awaiting-organizers.component';
import { UpcomingEventsComponent } from './components/events/upcoming-events/upcoming-events.component';
import { PastEventsComponent } from './components/events/past-events/past-events.component';
import { AdminAccountsComponent } from './components/accounts/admin-accounts/admin-accounts.component';
import { OrganizerAccountsComponent } from './components/accounts/organizer-accounts/organizer-accounts.component';
import { UserAccountsComponent } from './components/accounts/user-accounts/user-accounts.component';
import { EventDetailsComponent } from './components/event/event-details/event-details.component';
import { EditEventComponent } from './components/event/edit-event/edit-event.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { UserComponent } from './components/user/user.component';
import { EventComponent } from './components/event/event.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';

export const routes: Routes = [
  {
    path: 'awaiting-approval',
    component: AwaitingApprovalComponent,
    children: [
      { path: '', redirectTo: 'awaiting-events', pathMatch: 'full' },
      { path: 'awaiting-events', component: AwaitingEventsComponent },
      { path: 'awaiting-organizers', component: AwaitingOrganizersComponent },
    ],
  },
  {
    path: 'events',
    component: EventsComponent,
    children: [
      { path: '', redirectTo: 'upcoming-events', pathMatch: 'full' },
      { path: 'upcoming-events', component: UpcomingEventsComponent },
      { path: 'past-events', component: PastEventsComponent },
    ],
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    children: [
      { path: '', redirectTo: 'admin-accounts', pathMatch: 'full' },
      { path: 'admin-accounts', component: AdminAccountsComponent },
      { path: 'organizer-accounts', component: OrganizerAccountsComponent },
      { path: 'user-accounts', component: UserAccountsComponent },
    ],
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: ':userId/profile', component: ProfileComponent },
      { path: ':userId/details', component: UserDetailsComponent },
      { path: ':userId/edit', component: EditProfileComponent },
    ],
  },
  {
    path: 'event',
    component: EventComponent,
    children: [
      { path: '', redirectTo: 'create', pathMatch: 'full' },
      { path: 'create', component: CreateEventComponent },
      { path: ':eventId/edit', component: EditEventComponent },
      { path: ':eventId/details', component: EventDetailsComponent },
    ],
  },

  // Redirect to 'awaiting-approval' for the root path
  { path: '', redirectTo: 'awaiting-approval', pathMatch: 'full' },
  // Redirect to 'awaiting-approval' for any other unmatched paths
  { path: '**', redirectTo: 'awaiting-approval', pathMatch: 'full' },
];
