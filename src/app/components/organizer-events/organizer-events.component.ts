import { Component } from '@angular/core';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-organizer-events',
  standalone: true,
  imports: [SectionNavComponent, RouterOutlet],
  templateUrl: './organizer-events.component.html',
  styleUrl: './organizer-events.component.scss',
})
export class OrganizerEventsComponent {
  constructor() {}
  // TODO make the hasData property dynamic
  options = [
    { label: 'Чакащи одобрение', route: 'not-approved', hasData: true },
    { label: 'Мои предстоящи събития', route: 'past-approved', hasData: true },
    {
      label: 'Мои отминали събития',
      route: 'upcoming-approved',
      hasData: true,
    },
  ];
}
