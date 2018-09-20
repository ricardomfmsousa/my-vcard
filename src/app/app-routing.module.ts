import { UnderConstructionComponent } from './views/under-construction/under-construction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './views/home/home.component';
import { AboutViewComponent } from './views/about/about.component';
import { ContactViewComponent } from './views/contact/contact.component';
import { NotFoundViewComponent } from './views/not-found/not-found.component';

export const routedComponents = [
  HomeViewComponent,
  AboutViewComponent,
  ContactViewComponent,
  NotFoundViewComponent,
  UnderConstructionComponent
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
