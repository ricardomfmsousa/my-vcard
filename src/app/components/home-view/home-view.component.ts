import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-in.animation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
