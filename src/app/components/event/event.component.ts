import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
})
export class EventComponent {}
