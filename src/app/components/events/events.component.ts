import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [SectionNavComponent, RouterOutlet],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit {
  firstOption: string = 'Предстоящи събития';
  secondOption: string = 'Отминали Събития';
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/events/upcoming-events']);
  }
}
