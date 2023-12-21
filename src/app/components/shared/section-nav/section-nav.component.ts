import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  setDualRoutes,
  setTripleRoutes,
} from '../../../utils/nestedRoutesConfigurator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './section-nav.component.html',
  styleUrl: './section-nav.component.scss',
})
export class SectionNavComponent implements OnInit {
  @Input() firstOption: string = '';
  @Input() secondOption: string = '';
  @Input() thirdOption: string = '';

  firstRoute: string = '';
  secondRoute: string = '';
  thirdRoute: string = '';

  ngOnInit() {
    // Dual route
    if (this.thirdOption === '') {
      const { firstRoute, secondRoute } = setDualRoutes(
        this.firstOption,
        this.secondOption
      );
      this.firstRoute = firstRoute;
      this.secondRoute = secondRoute;
    } else {
      const { firstRoute, secondRoute, thirdRoute } = setTripleRoutes(
        this.firstOption,
        this.secondOption,
        this.thirdOption
      );
      (this.firstRoute = firstRoute),
        (this.secondRoute = secondRoute),
        (this.thirdRoute = thirdRoute);
    }
  }
}
