import { UnderConstructionComponent } from './views/under-construction/under-construction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { NotFoundViewComponent } from './components/not-found-view/not-found-view.component';

export const routedComponents = [
  HomeViewComponent,
  AboutViewComponent,
  ContactViewComponent,
  NotFoundViewComponent
];

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeViewComponent,
    data: {
      name: 'Home',
      navVisible: true
    }
  },
  {
    path: 'about',
    component: UnderConstructionComponent,
    data: {
      name: 'About',
      navVisible: true
    }
  },
  {
    path: 'contact',
    component: UnderConstructionComponent,
    data: {
      name: 'Contact',
      navVisible: true
    }
  },
  {
    path: 'not-found',
    component: NotFoundViewComponent,
    data: {
      name: 'Not Found',
      navVisible: false
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
