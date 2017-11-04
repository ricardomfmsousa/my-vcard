import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app.routing';
import { AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    AngularFontAwesomeModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
