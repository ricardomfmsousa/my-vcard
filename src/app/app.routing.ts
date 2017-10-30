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

const appRoutes: Routes = [
  { path: 'home', component: HomeViewComponent, data: { animation: 'home' } },
  { path: 'about', component: AboutViewComponent, data: { animation: 'about' } },
  { path: 'contact', component: ContactViewComponent, data: { animation: 'contact' } },
  { path: 'not-found', component: NotFoundViewComponent, data: { animation: 'not-found' } },
  { path: '', redirectTo: '/not-found', pathMatch: 'full' },
  { path: '**', component: NotFoundViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

