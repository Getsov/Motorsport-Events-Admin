import { Component, Input, OnInit } from '@angular/core';
import { LikeIconComponent } from '../like-icon/like-icon.component';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { DatePipe } from '@angular/common';
import { addIcons } from 'ionicons';
import { calendar, locationSharp, location } from 'ionicons/icons';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  standalone: true,
  imports: [LikeIconComponent, RouterLink, IonIcon, DatePipe],
})
export class EventCardComponent implements OnInit {
  @Input() event!: any;

  constructor() {
    addIcons({ calendar, locationSharp, location });
  }

  ngOnInit() {}
}
