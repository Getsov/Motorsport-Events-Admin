import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  confirmAction() {
    this.confirmed.emit(true);
  }

  cancelAction() {
    this.confirmed.emit(false);
  }
}
