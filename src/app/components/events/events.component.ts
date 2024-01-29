import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav.component';
import { SectionSortComponent } from "../../../shared/components/section-sort/section-sort.component";

@Component({
    selector: 'app-events',
    standalone: true,
    imports: [SectionNavComponent, RouterOutlet, SectionSortComponent],
    templateUrl: './events.component.html',
    styleUrl: './events.component.scss',
})
export class EventsComponent{
  constructor() {}
  // TODO make the hasData property dynamic
  options = [
    { label: 'Предстоящи събития', route: 'upcoming-events', hasData: true },
    { label: 'Отминали Събития', route: 'past-events', hasData: true },
    { label: 'Изтрити Събития', route: 'deleted-events', hasData: true }
  ];
}
