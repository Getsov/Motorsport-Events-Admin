import { Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { CreateEventComponent } from './components/event/create-event/create-event.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AwaitingApprovalComponent } from './components/awaiting-approval/awaiting-approval.component';
import { AwaitingOrganizersComponent } from './components/awaiting-approval/awaiting-organizers/awaiting-organizers.component';
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
import { AwaitingAdminsComponent } from './components/awaiting-approval/awaiting-admins/awaiting-admins.component';
import { ForgottenPasswordComponent } from './components/user/forgotten-password/forgotten-password.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { UserGuard } from '../shared/guards/user.guard';
import { OrganizerEventsComponent } from './components/organizer-events/organizer-events.component';
import { AdminGuard } from '../shared/guards/admin.guard';
import { EventsCardListComponent } from '../shared/components/events-card-list/events-card-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: 'awaiting-approval',
    component: AwaitingApprovalComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', redirectTo: 'awaiting-events', pathMatch: 'full' },
      { path: 'awaiting-events', component: EventsCardListComponent },
      { path: 'awaiting-organizers', component: AwaitingOrganizersComponent },
      { path: 'awaiting-admins', component: AwaitingAdminsComponent },
    ],
  },
  {
    path: 'events',
    component: EventsComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', redirectTo: 'upcoming-events', pathMatch: 'full' },
      { path: 'upcoming-events', component: EventsCardListComponent },
      { path: 'past-events', component: EventsCardListComponent },
      { path: 'deleted-events', component: EventsCardListComponent },
    ],
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    canActivate: [AdminGuard],
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
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [UserGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [UserGuard],
      },
      {
        path: 'forgotten-password',
        component: ForgottenPasswordComponent,
        canActivate: [UserGuard],
      },
      {
        path: ':userId/profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':userId/details',
        component: UserDetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':userId/edit',
        component: EditProfileComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'event',
    component: EventComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'create', pathMatch: 'full' },
      { path: 'create', component: CreateEventComponent },
      { path: ':eventId/edit', component: EditEventComponent },
      { path: ':eventId/details', component: EventDetailsComponent },
    ],
  },
  {
    path: 'organizer-events',
    component: OrganizerEventsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'not-approved', pathMatch: 'full' },
      { path: 'not-approved', component: EventsCardListComponent },
      { path: 'upcoming-approved', component: EventsCardListComponent },
      { path: 'past-approved', component: EventsCardListComponent },
    ],
  },

  // Redirect to 'awaiting-approval' for the root path
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  // Redirect to 'awaiting-approval' for any other unmatched paths
  { path: '**', redirectTo: 'awaiting-approval', pathMatch: 'full' },
];
