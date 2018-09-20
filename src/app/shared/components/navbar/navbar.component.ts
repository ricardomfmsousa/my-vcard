import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { appRoutes } from '../../../app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public appRoutes: Routes;
  public collapsedIn = false;

  constructor(private router: Router) {
    this.appRoutes = appRoutes;
  }

  public isInRoute(route): boolean {
    return this.router.url === `/${route.path}`;
  }

  public menuButtonClicked(event): void {
    this.collapsedIn = !this.collapsedIn;
  }

  public routerLinkClicked(event): void {
    this.collapsedIn = false;
  }
}
