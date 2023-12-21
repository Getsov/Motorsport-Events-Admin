import { Component } from '@angular/core';
import { SectionNavComponent } from '../../shared/section-nav/section-nav.component';
import { RouterOutlet } from '@angular/router';

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
}
