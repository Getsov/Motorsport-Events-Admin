import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-with-states',
  standalone: true,
  imports: [],
  templateUrl: './label-with-states.component.html',
  styleUrl: './label-with-states.component.scss',
})
export class LabelWithStatesComponent {
  @Input() inputRef: any;
  @Input() forId: string = '';
  @Input() labelText: string = '';
}
