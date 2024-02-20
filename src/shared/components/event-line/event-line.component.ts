import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-event-line',
  templateUrl: './event-line.component.html',
  styleUrl: './event-line.component.scss',
})
export class EventLineComponent  implements OnInit {
  @Input() inputString!: string;
  @Input() inputColor!: string;
  constructor() { }

  ngOnInit() {}

}
