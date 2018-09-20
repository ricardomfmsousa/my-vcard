import { UtilService } from '../../shared/services/util/util.service';
import { Component } from '@angular/core';
import { fadeAnimation } from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./home.component.scss']
})
export class HomeViewComponent {
  public hasNameTypingEndend: boolean;
  public isPositionVisible: boolean;
  public isSocialVisible: boolean;

  constructor(public utils: UtilService) {}

  public handleNameTypingComplete(): void {
    window.setTimeout(() => {
      this.hasNameTypingEndend = this.isPositionVisible = true;
    }, 1500);
  }

  public handlePositionTypingComplete(): void {
    window.setTimeout(() => {
      this.isSocialVisible = true;
    }, 1500);
  }
}
