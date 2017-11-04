import { Component } from '@angular/core';
import { fadeAnimation } from './animations/fade-in.animation';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {

  public appLoaded = false;

  constructor() {
    window.addEventListener('load', () => {
      this.appLoaded = true;
    });
  }
  public getRouterOutletState(outlet) {
    return outlet.activatedRouteData.name;
  }

}
