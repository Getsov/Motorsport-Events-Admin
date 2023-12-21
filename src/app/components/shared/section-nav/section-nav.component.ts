import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-section-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './section-nav.component.html',
  styleUrl: './section-nav.component.scss',
})
export class SectionNavComponent implements OnInit {
  @Input() firstOption: string = 'Чакащи събития';
  @Input() secondOption: string = 'Чакащи организатори';
  firstRoute: string = '';
  secondRoute: string = '';

  ngOnInit() {
    if (
      this.firstOption === 'Чакащи събития' &&
      this.secondOption === 'Чакащи организатори'
    ) {
      this.firstRoute = 'awaiting-events';
      this.secondRoute = 'awaiting-organizers';
    } else if (
      this.firstOption === 'Предстоящи събития' &&
      this.secondOption === 'Отминали Събития'
    ) {
      this.firstRoute = 'upcoming-events';
      this.secondRoute = 'past-events';
    }
  }
}
