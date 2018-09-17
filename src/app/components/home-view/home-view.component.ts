import { Component } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {}
