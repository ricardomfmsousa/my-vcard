import { Component } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {
  public isPositionVisible: boolean;
  public isSocialVisible: boolean;

  public handleNameTypingComplete(): void {
    window.setTimeout(() => {
      this.isPositionVisible = true;
    }, 1500);
  }

  public handlePositionTypingComplete(): void {
    window.setTimeout(() => {
      this.isSocialVisible = true;
    }, 1500);
  }
}
