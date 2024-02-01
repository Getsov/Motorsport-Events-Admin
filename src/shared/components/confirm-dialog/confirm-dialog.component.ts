import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
})
export class ConfirmDialogComponent {
  @Input() message: string = '';
  @Output() confirmed = new EventEmitter<boolean>();
  overlay: any;
  documentHeight: number = 0;

  constructor(private renderer: Renderer2) {}

  // ngAfterViewInit(): void {
  //   // Implement ngAfterViewInit
  //   this.overlay = document.querySelector('.dialog-overlay');
  //   this.documentHeight = Math.max(
  //     document.body.scrollHeight,
  //     document.body.offsetHeight,
  //     document.documentElement.clientHeight,
  //     document.documentElement.scrollHeight,
  //     document.documentElement.offsetHeight
  //   );
  //   this.renderer.setStyle(this.overlay, 'height', this.documentHeight + 'px');
  //   console.log(this.documentHeight);
  //   console.log(this.overlay);
  // }

  confirmAction() {
    this.confirmed.emit(true);
  }

  cancelAction() {
    this.confirmed.emit(false);
  }
}
