import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav.component';

@Component({
  selector: 'app-awaiting-approval',
  standalone: true,
  imports: [SectionNavComponent, RouterOutlet],
  templateUrl: './awaiting-approval.component.html',
  styleUrl: './awaiting-approval.component.scss',
})
export class AwaitingApprovalComponent {
  firstOption: string = 'Чакащи събития';
  secondOption: string = 'Чакащи организатори';

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/awaiting-approval/awaiting-events']);
  }
}
