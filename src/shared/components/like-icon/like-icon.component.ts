import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-icon',
  templateUrl: './like-icon.component.html',
  styleUrls: ['./like-icon.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LikeIconComponent implements OnInit {
  constructor() {}

  @Input() likedCount: number = 0;

  likeIconSrc: string = '../../../assets/icons/like-icons/not-liked-small.svg';
  fontSize: string = '12px';

  ngOnInit() {
    // configurate icon
    if (this.likedCount < 10) {
      this.fontSize = '10px';
      this.likeIconSrc = '../../../assets/icons/like-icons/not-liked-small.svg';
    } else if (this.likedCount < 100) {
      this.fontSize = '12px';
      this.likeIconSrc =
        '../../../assets/icons/like-icons/not-liked-medium.svg';
    } else if (this.likedCount < 1000) {
      this.fontSize = '14px';
      this.likeIconSrc = '../../../assets/icons/like-icons/not-liked-large.svg';
    }
  }
}
