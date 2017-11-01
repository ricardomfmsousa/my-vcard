import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { appRoutes } from '../../app.routing';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public appRoutes: Routes;
  public collapsedIn = false;

  constructor(private router: Router) {
    this.appRoutes = appRoutes;
  }

  ngOnInit() {
  }

  isInRoute(route) {
    return this.router.url === `/${route.path}`;
  }

  menuButtonClicked(event) {
    this.collapsedIn = !this.collapsedIn;
  }

  routerLinkClicked(event) {
    this.collapsedIn = false;
  }

}
