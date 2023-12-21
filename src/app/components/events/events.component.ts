import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [SectionNavComponent, RouterOutlet],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  firstOption: string = 'Предстоящи събития';
  secondOption: string = 'Отминали Събития';
}
